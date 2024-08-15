// FanControl.jsx
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EditableValue from './EditableValue';
import axios from 'axios';

const FanControl = () => {
  const data = useSelector(state => state.device?.deviceAllData);

  const [fanStatus, setFanStatus] = useState({
    idf: 'MAN',
    odf: 'MAN',
    comp: 'MAN',
    eev: 'MAN',
  });

  const toggleFanStatus = async (fan) => {
    setFanStatus({
      ...fanStatus,
      [fan]: fanStatus[fan] === 'MAN' ? 'AUTO' : 'MAN',
    });

    const bitString = convertFanStatusToBitString({
      ...fanStatus,
      [fan]: fanStatus[fan] === 'MAN' ? 'AUTO' : 'MAN',
    })

    console.log('FanBitString: ', bitString);
    try {
      await axios.post('http://localhost:4000/devices/writeModbus', { address: 'set_fan', value: bitStringToDecimal(bitString) });
    } catch (error) {
      console.error('Error updating mode:', error);
    }
  };

  const convertFanStatusToBitString = (status) => {
    const keys = [ 'eev', 'comp', 'odf','idf'];
    return keys.map(key => (status[key] === 'MAN' ? '1' : '0')).join('');
  };

  const bitStringToDecimal = (bitStr) => {
    return parseInt(bitStr, 2);
  };

  const [manualValues, setManualValues] = useState({
    indoor: 3,
    outdoor: 2,
  });

  const [settings, setSettings] = useState({
    set_idf_rpm: data['set_idf_rpm'],
    set_odf_rpm: data['set_odf_rpm'],
    set_comp_rps: data['set_comp_rps'],
    set_eev_step: data['set_eev_step'],
  });

  const handleSave = async (key, value) => {
    setManualValues({
      ...manualValues,
      [key]: value,
    });

    try {
      await axios.post('http://localhost:4000/devices/writeModbus', { address: key, value: value });
    } catch (error) {
      console.error('Error updating mode:', error);
    }
  };

  return (
    <div className="table-container">
      <h2 className="table-header">FAN 제어</h2>
      <table className="table">
        <thead>
          <tr>
            <th>구분</th>
            <th>AUTO</th>
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
              <EditableValue value={settings.set_idf_rpm} onSave={(value) => handleSave('set_idf_rpm', value)} />
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
              <EditableValue value={settings.set_odf_rpm} onSave={(value) => handleSave('set_odf_rpm', value)} />
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
              <EditableValue value={settings.set_comp_rps} onSave={(value) => handleSave('set_comp_rps', value)} />
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
              <EditableValue value={settings.set_eev_step} onSave={(value) => handleSave('set_eev_step', value)} />
            </td>
            <td>{data.eev_real}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FanControl;
