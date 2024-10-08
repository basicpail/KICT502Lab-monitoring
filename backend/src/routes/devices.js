const express = require('express');
const router = express.Router();
const mqtt = require('mqtt');
const auth = require('../middleware/auth');
const Device = require('../models/Device');
const { downsampling } = require('../utils/formatting');

const modbusWritePubTopic = process.env.MODBUS_WRITE_PUB_TOPIC;
const modbusResponseSubTopic = process.env.MODBUS_RESPONSE_SUB_TOPIC;
const modbusResponseTimeout = 3000;

const mqttClient = mqtt.connect(process.env.MQTT_BROKER_ADDR);

mqttClient.on('connect', () => {
    console.log('Connected to MQTT broker');
});

mqttClient.on('error', (err) => {
    console.error('MQTT Error:', err);
});

mqttClient.subscribe(modbusResponseSubTopic, (err) => {
    if (err) {
        console.error('Failed to subscribe to modbus/response:', err);
    }
});
// 요청 ID와 관련된 응답을 저장할 맵
const pendingResponses = new Map();

mqttClient.on('message', (topic, message) => {
    if (topic === modbusResponseSubTopic) {
        const response = JSON.parse(message.toString());
        const requestId = response.requestId;

        // 요청 ID에 해당하는 Promise를 찾아서 resolve
        if (pendingResponses.has(requestId)) {
            const resolve = pendingResponses.get(requestId);
            resolve(response);
            pendingResponses.delete(requestId);
        }
    }
});


router.post('/writeModbus', async (req, res, next) => {
    try {
        const body = req.body;

        if (body === undefined) {
            return res.status(400).json({ error: 'args is required' });
        }
        const requestId = Date.now().toString();
        const message = JSON.stringify({ ...body, requestId });
        // const message = JSON.stringify(body);

        // MQTT 메시지 발행
        mqttClient.publish(modbusWritePubTopic, message, (error) => {
            if (error) {
                console.error('Failed to publish message:', error);
                return res.status(500).json({ error: 'Failed to update' });
            }
            // res.status(200).json({ status: 'Mode updated successfully' });
        });
            // MQTT 응답을 기다리는 Promise 생성
            const responsePromise = new Promise((resolve, reject) => {
                pendingResponses.set(requestId, resolve);

                // 일정 시간 내에 응답이 오지 않으면 타임아웃
                setTimeout(() => {
                    if (pendingResponses.has(requestId)) {
                        pendingResponses.delete(requestId);
                        reject(new Error('Response timeout'));
                    }
                }, modbusResponseTimeout);
            });

            const response = await responsePromise;
            // console.log('postResponse: ',response)
            res.status(200).json(response);

    } catch (error) {
        next(error);
    }
});


// 데이터 조회 및 변환 함수
router.post('/getCSVDataFromDB', async (req, res, next) => {
    try {
        const { startDate, endDate, selectedDataList } = req.body;
        const data = await getData(startDate, endDate, selectedDataList);

        if (!data || data.length === 0) {
            return res.status(404).json({ error: "No data found" });
        }

        
        const groupedData = {};
        data.forEach(entry => {
            if (!groupedData[entry.date]) {
                groupedData[entry.date] = { Date: entry.date };
            }
            groupedData[entry.date][entry.type] = entry.value;
        });

        // 그룹화된 데이터를 행으로 변환합니다.
        const rows = Object.values(groupedData);
        return res.send({'data':rows})
    
        // const now = new Date();
        // const timestamp = now.toISOString().replace(/:/g, '-').slice(0, 19);
        // const filePath = path.join(process.env.CSV_PATH, `${timestamp}.csv`);
        // const ws = fs.createWriteStream(filePath, { encoding: 'utf8' });
        // ws.write('\ufeff'); //한글 깨짐 처리
        // fastcsv
        //     .write(rows, { headers: true })
        //     .pipe(ws)
        //     .on('finish', () => {
        //         //res.json({rows});
        //         //res.send(rows);
        //         res.json({ message: "Data saved successfully", filePath });
        //     })
        //     .on('error', (error) => {
        //         console.error('Error writing CSV file:', error);
        //         res.status(500).json({ error: "Failed to save data" });
        //     });

    
    } catch (error) {
        next(error);
    }
})

router.post('/getDeviceDataFromDB', async (req, res, next) => {
    try {
        const { startDate, endDate, selectedDataList } = req.body;
        // console.log(`${startDate} ${endDate} ${selectedDataList}`)
        const data = await getData(startDate, endDate, selectedDataList);
        const downsampledData = downsampling(data); 
        res.json(downsampledData);

    } catch (error) {
        next(error);
    }
})

async function getData(startDate, endDate, selectedDataList) {
    try {
        const data = await Device.find({
            createdAt: { $gte: startDate+':00Z', $lte: endDate+':00Z' }
          });
        
        const result = [];
        data.forEach((doc, index) => {
            const dateStr = new Date(doc.createdAt).toISOString().slice(0, 19);

            selectedDataList.forEach(selected => {
                result.push({
                    date: dateStr,
                    value: doc[selected],
                    type: selected
                })
            });
        });
    
        // console.log('getData: ', result)
            
        return result;
    } catch (error) {
        console.error('getDataErr: ', error)
    }
    
}

module.exports = router;