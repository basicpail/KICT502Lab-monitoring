const socketIo = require('socket.io');
const mqtt = require('mqtt');
const Device = require('../models/Device');
const { translate502DeviceData } = require('./formatting');
const { json } = require('express');

let dataCache = {}; // 주기적인 작업 결과를 저장할 변수
// const brokerAddr = '119.30.150.230';
const brokerAddr = 'kict502lab.duckdns.org';
const brokerPort = 1883
const subTopic = 'modbus/read'

const setupSocket = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: '*',
      //origin: 'http://192.168.0.100:5174',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
      credentials: true,
    },
  });

  const mqttClient = mqtt.connect(`mqtt://${brokerAddr}:${brokerPort}`);
  
  mqttClient.on('connect', () => {
    console.log('Connected to MQTT Broker');
    mqttClient.subscribe(`${subTopic}`, (err) => {
      if (err) {
        console.error('Subscribe error:', err);
      }
    });
  });

  mqttClient.on('message', async (topic, message) => {
    const newData = message.toString();
    // console.log('mqttNewData: ', newData);
    dataCache = newData
    io.emit('kict502Lab', dataCache); // 모든 클라이언트에게 업데이트된 데이터 전송
    const device = new Device(translate502DeviceData(JSON.parse(newData)));
    await device.save();
  });

  io.on('connection', (socket) => {
    console.log('Client connected');
    socket.emit('kict502Lab', dataCache); // 연결된 클라이언트에게 현재 데이터 전송

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

module.exports = setupSocket;
