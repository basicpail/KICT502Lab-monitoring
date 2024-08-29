var lttb = require("downsample-lttb");
const { mappingData } = require('./const')


//32bit-float little-endian bytes swap
//ex)[32768,17638,0,0] -> [0X8000,0X44E6,0,0] -> [0X44E6,0X8000,0,0] -> [ 0X44, 0Xe6, 0X80, 0X00 ] -> 1844
function convertArrayForTransmitter(inputArray){
    if (inputArray.length !== 4) {
        throw new Error('배열의 요소는 4개여야 합니다.');
    }

    // 16진수로 변환
    const hexArray = inputArray.map(num => '0x' + num.toString(16).toUpperCase());

    // swap
    const swappedArray = [hexArray[1], hexArray[0], hexArray[2], hexArray[3]];

    // 2바이트로 나누어 배열 생성
    const dividedArray = [];
    for (let i = 0; i < swappedArray.length; i++) {
        const hexValue = swappedArray[i].substring(2); // "0x" 제거
        dividedArray.push('0X' + hexValue.substring(0, 2)); // 상위 1바이트
        dividedArray.push('0X' + hexValue.substring(2));   // 하위 1바이트
    }

    // 출력 배열이 4개의 요소를 가지도록 조정
    while (dividedArray.length > 4) {
        dividedArray.pop();
    }
    while (dividedArray.length < 4) {
        dividedArray.push('0x00');
    }

    var buffer = new ArrayBuffer(4); // 4바이트 버퍼 생성
    var view = new DataView(buffer); // 버퍼로부터 DataView 생성
    dividedArray.forEach(function (byte, i) { // 바이트 배열을 DataView에 설정
        view.setUint8(i, byte);
    });
    return view.getFloat32(0); // DataView를 통해 부동 소수점을 가져옴
}

//[17245,39322,0,0] -> 221.4
const powermetterData = [
    0, 200, 0, 0, 17244,
    39322, 0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 3, 0, 17
]
function convertArrayForPowermetter(inputArray){
    if (inputArray.length !== 4) {
        throw new Error('배열의 요소는 4개여야 합니다.');
    }

    // 16진수로 변환
    const hexArray = inputArray.map(num => '0x' + num.toString(16).toUpperCase());


    // 2바이트로 나누어 배열 생성
    const dividedArray = [];
    for (let i = 0; i < hexArray.length; i++) {
        const hexValue = hexArray[i].substring(2); // "0x" 제거
        dividedArray.push('0X' + hexValue.substring(0, 2)); // 상위 1바이트
        dividedArray.push('0X' + hexValue.substring(2));   // 하위 1바이트
    }

    // 출력 배열이 4개의 요소를 가지도록 조정
    while (dividedArray.length > 4) {
        dividedArray.pop();
    }
    while (dividedArray.length < 4) {
        dividedArray.push('0x00');
    }

    var buffer = new ArrayBuffer(4); // 4바이트 버퍼 생성
    var view = new DataView(buffer); // 버퍼로부터 DataView 생성
    dividedArray.forEach(function (byte, i) { // 바이트 배열을 DataView에 설정
        view.setUint8(i, byte);
    });
    return view.getFloat32(0).toFixed(1); // DataView를 통해 부동 소수점을 가져옴
}


function convertToControlParams(room, device, func, input){
    let slaveId;
    let address;
    let value;
    
    if (room === 'room1' && device === 'smd') {
        slaveId = 21;
    } else if (room === 'room1' && device === 'smu') {
        slaveId = 22;
    } else if (room === 'room2' && device === 'smd') {
        slaveId = 23;
    } else if (room === 'room2' && device === 'smu') {
        slaveId = 24;
    } else {
        throw new Error('Invalid Control Params');
    }

    address = parseInt(func);
    value = parseInt(input);


    return {slaveId, address, value}

}

// const watth = powermetterData[1]; //unsigned long
// const voltage = convertArrayForPowermetter([powermetterData[4],powermetterData[5],0,0]); //32bit float
// const current = convertArrayForPowermetter([powermetterData[10],powermetterData[11],0,0]); //32bit float
// const watt = powermetterData[17]; //unsigned long
// console.log('watth: ', watth);
// console.log('voltage: ', voltage);
// console.log('current: ', current);
// console.log('watt: ', watt);

//console.log(convertArrayForPowermetter([17245,39322,0,0]))



function translate502DeviceData(data) {
    const translatedData = {};
    for (let key in data) {
        const newKey = Object.keys(mappingData).find(k => mappingData[k] === key);
        if (newKey) {
          translatedData[newKey] = data[key];
        }
    }
    
    // console.log('translatedData: ', translatedData);
    return translatedData
}


function downsampling(data) {
    try {
        const convertToKST = date => {
            const kstOffset = 9 * 60 * 60 * 1000; // 9 hours in milliseconds
            const kst =  new Date(date.getTime() + kstOffset);
            return kst.toISOString().slice(0, 19);
        };

        const mergeNumericData = numericData => {
            return numericData.reduce((acc, curr) => {
                const timestamp = curr[0];
                
                // 기존에 해당 timestamp가 존재하는지 확인
                const existingEntry = acc.find(item => item[0] === timestamp);
                
                if (existingEntry) {
                    // 기존 항목이 있으면 나머지 값을 병합
                    existingEntry.push(...curr.slice(1));
                } else {
                    // 존재하지 않으면 새로운 항목 추가
                    acc.push([...curr]);
                }
        
                return acc;
            }, []);
        }

        function convertToObjectArray(data) {
            return data.flatMap(entry => {
                const timestamp = entry[0];
                const dateStr = new Date(timestamp).toISOString().slice(0, 19);
        
                // 데이터 쌍을 반복하면서 개별 객체로 변환
                const result = [];
                for (let i = 1; i < entry.length; i += 2) {
                    result.push({
                        date: dateStr,
                        value: entry[i],
                        type: entry[i + 1]
                    });
                }
                return result;
            });
        }
        // // 데이터 변환: [[ 1724209781000, 19 ]] 형식으로 변환
        // const numericData = data.map(d => [new Date(d.date).getTime(), d.value, d.type]);
        // // 샘플링
        // const numPoints = 50000;  // 원하는 포인트 수
        // const sampledNumericData = lttb.processData(numericData, numPoints);
    
        // // 샘플링 결과를 { date, value } 형식으로 변환
        // const sampledData = sampledNumericData.map(d => ({
        //     date: convertToKST(new Date(d[0])),  // 타임스탬프를 ISO 문자열로 변환
        //     value: d[1],
        //     type: d[2]
        // }));
    
    
        // 데이터와 다운샘플링할 포인트 수를 받아서 시간 기준으로 n등분한 후 다운샘플링
        const processData = (data, numIntervals, numPointsPerInterval) => {
            // 데이터가 비어있으면 빈 배열 반환
            if (data.length === 0) return [];

            // 데이터의 시작과 끝 시점
            // [
            //     { date: '2024-08-21T12:09:41' },
            //     { value: 36, type: '거실1 환기 풍량' },
            //     { value: 0, type: '거실2 급기 풍량' }
            // ]
            // console.log('첫 번째 데이터: ', data[0].date)
            // console.log('첫 번째 데이터: ', convertToKST(new Date(data[0].date)))
            // console.log('마지막 데이터: ', convertToKST(new Date(data[data.length - 1].date)))
            const startDate = new Date(data[0].date).getTime();
            const endDate = new Date(data[data.length - 1].date).getTime();

            // 각 구간의 시간 간격
            const intervalMs = (endDate - startDate) / numIntervals;

            // 결과를 저장할 배열
            let processedData = [];

            // 각 구간에 대해 다운샘플링 수행
            for (let i = 0; i < numIntervals; i++) {
                const intervalStart = startDate + i * intervalMs;
                const intervalEnd = startDate + (i + 1) * intervalMs;
                // console.log('intervalStart: ', convertToKST(new Date(intervalStart)))
                // console.log('intervalEnd: ', convertToKST(new Date(intervalEnd)))

                // 현재 구간의 데이터를 필터링
                const intervalData = data.filter(point => {
                    const date = new Date(point.date).getTime();
                    // console.log('intervalData_date: ', convertToKST(new Date(date)))
                    return date >= intervalStart && date < intervalEnd;
                });


                let numericData = intervalData.map(d => [new Date(d.date).getTime(), d.value, d.type])
                numericData = mergeNumericData(numericData);
                // console.log('numericData: ',numericData)
                // 다운샘플링 수행
                if (intervalData.length > 0) {
                    // const downsampledData = lttb.processData(numericData.map(point => ({
                    //     // date: new Date(point.date).getTime(),
                    //     // value: point.value,
                    //     // type: point.type
                    //     date: new Date(point.date).getTime(),
                    //     value: point.value,
                    //     type: point.type
                    // })), numPointsPerInterval);
                    const downsampledData = lttb.processData(numericData, numPointsPerInterval)
                    // console.log('downsampledData.length: ', downsampledData.length)

                    // 다운샘플링된 데이터를 원래 형식으로 변환
                    // const intervalResult = downsampledData.map(point => ({
                    //     date: convertToKST(new Date(point[0])),
                    //     value: point[1],
                    //     type: point[2]
                    // }));
                    const intervalResult = convertToObjectArray(downsampledData)


                    // console.log('processedData: ',processedData[processedData.length -1]);
                    processedData = processedData.concat(intervalResult);
                }
            }

            // console.log('processedData: ',processedData)

            return processedData;
        }


        const numIntervals = 10; // 시간 기준으로 나눌 구간의 수
        const numPointsPerInterval = 25; // 각 구간 내에서 유지할 포인트 수
        const processedData = processData(data, numIntervals, numPointsPerInterval);

        return processedData

    } catch (error) {
        console.error('downsample_error: ', error)
    }
}



module.exports = { convertArrayForTransmitter, convertArrayForPowermetter, convertToControlParams, translate502DeviceData, downsampling };