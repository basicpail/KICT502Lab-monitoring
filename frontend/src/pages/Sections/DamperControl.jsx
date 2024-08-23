// DamperControl.jsx

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EditableValue from './EditableValue';
import axios from 'axios';
import axiosInstance from '../../utils/axios';

const DamperControl = () => {
  const data = useSelector(state => state.device?.deviceAllData);
  const [damperStatus, setDamperStatus] = useState(Array(12).fill('AUTO'));
  const [bitString, setBitString] = useState('000000000000'); // 초기 상태: 모든 댐퍼 자동
  const [settings, setSettings] = useState({
    set_damper1: data['set_damper1'],
    set_damper2: data['set_damper2'],
    set_damper3: data['set_damper3'],
    set_damper4: data['set_damper4'],
    set_damper5: data['set_damper5'],
    set_damper6: data['set_damper6'],
    set_damper7: data['set_damper7'],
    set_damper8: data['set_damper8'],
    set_damper9: data['set_damper9'],
    set_damper10: data['set_damper10'],
    set_damper11: data['set_damper11'],
    set_damper12: data['set_damper12'],
  });
  //const [settings, setSettings] = useState(Array(12).fill(4200));
  // const [bitString, setBitString] = useState('111111111111'); // 초기 상태: 모든 댐퍼 수동

  useEffect(() => {
    setDamperStatus(prevState => {
        const newStatus = [...prevState];
        const value = decimalToBitString(parseInt(data['set_damper']))
        
        // value의 각 비트를 검사하여 1인 경우 해당 인덱스의 damperStatus를 'MAN'으로 설정
        // console.log('setDamperStatus: ', value)
        value.split('').forEach((bit, i) => {
            if (bit === '1') {
                newStatus[i] = 'MAN';
            }
            else newStatus[i] = 'AUTO'
        });
        
        return newStatus.reverse();
    });
  }, [data]); // value가 변경될 때마다 useEffect 실행


  // 자동/수동 선택 (0=자동/1=수동)
  const toggleDamperStatus = async (index) => {
    const newDamperStatus = damperStatus.map((status, i) =>
      i === index ? (status === 'MAN' ? 'AUTO' : 'MAN') : status
    );
    setDamperStatus(newDamperStatus);
    const newBitString = generateBitString(newDamperStatus);
    console.log('DamperBitString: ', newBitString);
    setBitString(newBitString);

    try {
      await axiosInstance.post('/devices/writeModbus', { address: 'set_damper', value: bitStringToDecimal(newBitString) });
    } catch (error) {
      console.error('Error updating mode:', error);
    }
  };

  const handleSave = async (index, key, value) => {
    // setSettings(settings.map((setting, i) =>
    //   i === index ? value : setting
    // ));
    if (damperStatus[index] == 'MAN'){
      setSettings({ ...settings, [key]: value });

      try {
        await axiosInstance.post('/devices/writeModbus', { address: key, value: value });
      } catch (error) {
        console.error('Error updating mode:', error);
      }
    }
  };

  const generateBitString = (statuses) => {
    return statuses.map(status => (status === 'AUTO' ? '0' : '1')).reverse().join('');
  };

  const bitStringToDecimal = (bitStr) => {
    return parseInt(bitStr, 2);
  };

  const decimalToBitString = (decimal) => {
    let bitStr = decimal.toString(2);
    while (bitStr.length < 12) {
      bitStr = '0' + bitStr;
    }
    return bitStr.split('').join('');
    //return bitStr.split('').reverse().join('');
  };

  return (
    <div className="table-container">
      <h2 className="table-header">댐퍼 제어</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>구분</th>
                <th>자동/수동</th>
                <th>설정값</th>
                <th>현재값</th>
              </tr>
            </thead>
            <tbody>
              {damperStatus.slice(0, 6).map((status, index) => (
                <tr key={index}>
                  <td>DAMPER-{index + 1}</td>
                  <td>
                    <button
                      className={`btn ${status === 'AUTO' ? 'bg-green-500' : 'bg-red-500'}`}
                      onClick={() => toggleDamperStatus(index)}
                    >
                      {status}
                    </button>
                  </td>
                  <td>
                    <EditableValue 
                      value={settings[`set_damper${index + 1}`]} 
                      onSave={(value) => handleSave(index, `set_damper${index + 1}`, value)} 
                      placeholder={`Enter value for DAMPER-${index + 1}`} 
                    />
                  </td>
                  <td>{data[`set_damper${index + 1}`]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>구분</th>
                <th>자동/수동</th>
                <th>설정값</th>
                <th>현재값</th>
              </tr>
            </thead>
            <tbody>
              {damperStatus.slice(6, 12).map((status, index) => (
                <tr key={index + 7}>
                  <td>DAMPER-{index + 7}</td>
                  <td>
                    <button
                      className={`btn ${status === 'AUTO' ? 'bg-green-500' : 'bg-red-500'}`}
                      onClick={() => toggleDamperStatus(index + 6)}
                    >
                      {status}
                    </button>
                  </td>
                  <td>
                    <EditableValue 
                      value={settings[`set_damper${index + 7}`]} 
                      onSave={(value) => handleSave(index,`set_damper${index + 7}`, value)} 
                      placeholder={`Enter value for DAMPER-${index + 7}`} 
                    />
                  </td>
                  <td>{data[`set_damper${index + 7}`]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div>
        <h3>현재 비트 문자열: {bitString}</h3>
        <h3>십진수 값: {bitStringToDecimal(bitString)}</h3>
        <h3>십진수 10을 비트 문자열로 변환: {decimalToBitString(bitStringToDecimal(bitString))}</h3>
      </div> */}
    </div>
  );
};

export default DamperControl;
