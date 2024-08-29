const socketIo = require('socket.io');
const mqtt = require('mqtt');
const Device = require('../models/Device');
const { translate502DeviceData } = require('./formatting');
const { json } = require('express');

let dataCache = {}; // 주기적인 작업 결과를 저장할 변수
const brokerAddr = process.env.MQTT_BROKER_ADDR;
const subTopic = process.env.MODBUS_READ_SUB_TOPIC;

const setupSocket = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
      credentials: true,
    },
  });

  const mqttClient = mqtt.connect(brokerAddr);
  
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
