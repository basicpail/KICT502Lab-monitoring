// FanControl.jsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EditableValue from './EditableValue';
import useHandleSave from '../../hooks/useHandleSave';

const FanControl = () => {
  const data = useSelector(state => state.device?.deviceAllData);
  const { handleWriteModbus } = useHandleSave();

  const [fanStatus, setFanStatus] = useState({
    idf: 'AUTO',
    odf: 'ATUO',
    comp: 'AUTO',
    eev: 'AUTO',
  });
  const [settings, setSettings] = useState({
    set_idf_rpm: data['set_idf_rpm'],
    set_odf_rpm: data['set_odf_rpm'],
    set_comp_rps: data['set_comp_rps'],
    set_eev_step: data['set_eev_step'],
  });


  useEffect(() => {
    setFanStatus(prevState => {
        const newStatus = prevState;
        const value = decimalToBitString(parseInt(data['set_fan']))
        
        value.split('').forEach((bit, i) => {
            if (bit === '1') {
                newStatus[Object.keys(newStatus)[value.length-1-i]] = 'MAN';
            }
            else {
              newStatus[Object.keys(newStatus)[value.length-1-i]] = 'AUTO';
            }
        });
        
        return newStatus;
    });
  }, [data]); // value가 변경될 때마다 useEffect 실행

  const toggleFanStatus = async (fan) => {
    // setFanStatus({
    //     ...fanStatus,
    //     [fan]: fanStatus[fan] === 'MAN' ? 'AUTO' : 'MAN',
    //   });

    const bitString = convertFanStatusToBitString({
      ...fanStatus,
      [fan]: fanStatus[fan] === 'MAN' ? 'AUTO' : 'MAN',
    })

    console.log('FanBitString: ', bitString);
    handleWriteModbus('set_fan', bitStringToDecimal(bitString))
  };
  // 0=자동/1=수동
  const convertFanStatusToBitString = (status) => {
    const keys = [ 'eev', 'comp', 'odf','idf'];
    return keys.map(key => (status[key] === 'MAN' ? '1' : '0')).join('');
  };

  const bitStringToDecimal = (bitStr) => {
    return parseInt(bitStr, 2);
  };

  const decimalToBitString = (decimal) => {
    let bitStr = decimal.toString(2);
    while (bitStr.length < 4) {
      bitStr = '0' + bitStr;
    }
    return bitStr.split('').join('');
    //return bitStr.split('').reverse().join('');
  };



  const handleSave = async (key, value) => {

    let isMan = false
    Object.keys(fanStatus).some(k => {
      console.log('k, key, value: ', k, key, value)
      if (key.includes(k) && fanStatus[k] == 'MAN') {
        isMan = true
        return true //반복중단
      }
      else {
        isMan = false
        return false
      }
    })

    if (isMan) {
      setSettings({ ...settings, [key]: value });
      handleWriteModbus(key, value)
    }
  };

  return (
    <div className="table-container">
      <h2 className="table-header">FAN 제어</h2>
      <table className="table">
        <thead>
          <tr>
            <th>구분</th>
            <th>자동/수동</th>
            <th>수동</th>
            <th>측정</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>실내팬</td>
            <td>
              <button
                className={`btn ${fanStatus.indoor === 'START' ? 'bg-green-500' : 'bg-red-500'}`}
                onClick={() => toggleFanStatus('idf')}
              >
                {fanStatus.idf}
              </button>
            </td>
            <td>
              <EditableValue value={data.set_idf_rpm} onSave={(value) => handleSave('set_idf_rpm', value)} />
            </td>
            <td>{data.idf_realrpm}</td>
          </tr>
          <tr>
            <td>실외팬</td>
            <td>
              <button
                className={`btn ${fanStatus.outdoor === 'START' ? 'bg-green-500' : 'bg-red-500'}`}
                onClick={() => toggleFanStatus('odf')}
              >
                {fanStatus.odf}
              </button>
            </td>
            <td>
              <EditableValue value={data.set_odf_rpm} onSave={(value) => handleSave('set_odf_rpm', value)} />
            </td>
            <td>{data.odf_realrpm}</td>
          </tr>
          <tr>
            <td>COMP</td>
            <td>
              <button
                className={`btn ${fanStatus.comp === 'START' ? 'bg-green-500' : 'bg-red-500'}`}
                onClick={() => toggleFanStatus('comp')}
              >
                {fanStatus.comp}
              </button>
            </td>
            <td>
              <EditableValue value={data.set_comp_rps} onSave={(value) => handleSave('set_comp_rps', value)} />
            </td>
            <td>{data.comp_realrps}</td>
          </tr>
          <tr>
            <td>EEV</td>
            <td>
              <button
                className={`btn ${fanStatus.eev === 'START' ? 'bg-green-500' : 'bg-red-500'}`}
                onClick={() => toggleFanStatus('eev')}
              >
                {fanStatus.eev}
              </button>
            </td>
            <td>
              <EditableValue value={data.set_eev_step} onSave={(value) => handleSave('set_eev_step', value)} />
            </td>
            <td>{data.eev_real}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FanControl;
