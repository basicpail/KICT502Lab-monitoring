// modbusUtils.js
const { convertArrayForTransmitter, convertArrayForPowermetter, convertToControlParams } = require('./formatting')
const { transmitterRegisterArray, smdRegisterArray,smuRegisterArray,smdsmuRegisterDescriptions, powermeterRegisterArray } = require('./const');

const ModbusRTU = require('modbus-serial');

let devicesData = [];

// Modbus RTU 클라이언트 생성
const client = new ModbusRTU();
// 시리얼 포트 및 옵션 설정
const portName = 'COM4'; // 시리얼 포트 이름에 따라 변경
const options = {
  baudRate: 9600, // 통신 속도 (bps)
  parity: 'none', // 패리티 (none, even, odd)
  stopBits: 1, // 스톱 비트 (1, 2)
  dataBits: 8, // 데이터 비트 (5, 6, 7, 8)
  bufferSize: 256 // 버퍼 크기
};

// 연결 함수
async function connectModbus() {
  try {
    await client.connectRTUBuffered(portName, options);
    console.log('Modbus RTU connected');
  } catch (err) {
    console.error('Modbus RTU connection error:', err);
  }
}


//client.readHoldingRegisters(slaveId, startAddress, length); //slaveId 확인!!!

// 읽기 함수
async function readModbus(slaveId, address, length, description) {
  try {
    client.setID(slaveId)
    //const data = await client.readHoldingRegisters(address, length);
    //const data = await client.readInputRegisters(address, length);

    //트랜스미터 데이터
    if (slaveId === 11 || slaveId === 12){
      let prefix = '';
      //slaveId === 11 ? prefix = '급기' : prefix = '배기'
      const data = [32768,17638,0,0]
      const transmitterData = convertArrayForTransmitter(data)

      //const data = await client.readHoldingRegisters(address, length);
      //const transmitterData = convertArrayForTransmitter(data.data);

      if(description === '온도') console.log(`${prefix} ${description}: ${transmitterData.toFixed(1)}`);
      else console.log(`${prefix} ${description} Value: ${transmitterData}`);

    }

    //SMD SMU 데이터
    else if (slaveId === 21 || slaveId === 22 || slaveId === 23 || slaveId === 24) {
      let prefix = '';
      switch (slaveId) {
          case 21:
            prefix = 'Room1 SMD'
            break;
          case 22:
            prefix = 'Room1 SMU'
            break;
          case 23:
            prefix = 'Room2 SMD'
            break;
          case 24:
            prefix = 'Room2 SMU'
            break;
          default:
            prefix = ''
      }

      //const holdingRegisterdata = await client.readHoldingRegisters(address, 21); //length 수정 필요!
      const holdingRegisterdata = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 1);

      for(let addressDescription of smdsmuRegisterDescriptions.holdingRegisterDescriptions) {
        if (addressDescription.description !== undefined)
          //console.log(`${prefix} ${addressDescription.description}: ${holdingRegisterdata.data[addressDescription.address]}`)
          console.log(`${prefix} ${addressDescription.description}: ${holdingRegisterdata[addressDescription.address]}`)
      }

      //const InputRegisterData = await client.readInputRegisters(address, 10); //length 수정 필요! 15이상 읽었을 때 에러 안나는지 확인
      const InputRegisterData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 1);

      for(let addressDescription of smdsmuRegisterDescriptions.inputRegisterDescriptions) {
        if (addressDescription.description !== undefined)
          //console.log(` ${prefix} ${InputRegisterData.data[addressDescription.description]}: ${InputRegisterData.data[addressDescription.address]}`)
          console.log(`${prefix} ${addressDescription.description}: ${InputRegisterData[addressDescription.address]}`)
      }
    }

    //파워미터 데이터
    else if ( slaveId === 13 ){
      const powermetterData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 1);

      //const powermetterData = await client.readHoldingRegisters(address, length).data;
      const watth = powermetterData[1]; //unsigned long
      const voltage = convertArrayForPowermetter([powermetterData[4],powermetterData[5],0,0]); //32bit float
      const current = convertArrayForPowermetter([powermetterData[10],powermetterData[11],0,0]); //32bit float
      const watt = powermetterData[17]; //unsigned long
      console.log(` 유효전력량: ${watth}`)
      console.log(` 전압: ${voltage}`)
      console.log(` 전류: ${current}`)
      console.log(` 유효전력: ${watt}`)
    }

    return null;
    
  } catch (err) {
    console.error('Error reading data:', err);
    return null;
  }
}

// 쓰기 함수
//async function writeModbus(slaveId, address, value) {
async function writeModbus(room, device, func, input) {
  try {
    let { slaveId, address, value } = convertToControlParams(room, device, func, input)
    console.log(`slaveId: ${slaveId}, address: ${address}, value: ${value}`)
    client.setID(slaveId);
    const response = await client.writeRegister(address, value);
    console.log('Data written successfully: ',response);
    return response;
  } catch (err) {
    console.error('Error writing data:', err);
    return err.message;
  }
}


// 연결 후 읽기와 쓰기 호출
async function performModbusActions(RegisterArray) {
  //await connectModbus();
  //await writeModbus(slaveId=1,address=0,value=555);
  //await readModbus(13, 0, 15); //slaveID 2, 주소 1에서 5개의 레지스터 읽기
  console.log('=======================================')
  await readModbus(11, 7010, 4, description='급기 풍량');
  await readModbus(11, 7040, 4, description='급기 온도');
  await readModbus(11, 7070, 4, description='급기 Co2');
  await readModbus(12, 7010, 4, description='배기 풍량');
  await readModbus(12, 7040, 4, description='배기 온도');
  await readModbus(12, 7070, 4, description='배기 Co2');
  console.log('=======================================')
  await readModbus(21, 0, 21, description='Room1 급기 SMD');
  console.log('=======================================')
  await readModbus(22, 0, 21, description='Room1 배기 SMU');
  console.log('=======================================')
  await readModbus(23, 0, 21, description='Room2 급기 SMD');
  console.log('=======================================')  
  await readModbus(24, 0, 21, description='Room2 배기 SMU');
  console.log('=======================================')
  await readModbus(13, 0, 20, description='전력량계');
  console.log('=======================================')


  // for (let element of RegisterArray) {
  //   console.log(element);
  //   await readModbus(element.slaveId, element.length, element.description)
  // }    

}

//connectModbus();
// setInterval(() => {
//   performModbusActions(transmitterRegisterArray);
//   //performModbusActions(smdRegisterArray);
//   //performModbusActions(smuRegisterArray);
//   //performModbusActions(powermeterRegisterArray);

// }, 3000);

module.exports = { connectModbus, readModbus, writeModbus, performModbusActions };
