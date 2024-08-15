// RefrigerantCycleStatus.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditableValue from './EditableValue';
import axios from 'axios';

const RefrigerantCycleStatus = () => {
  const data = useSelector(state => state.device?.deviceAllData);
  
  const [settings, setSettings] = useState({
    set_eev_step: data['set_eev_step'],
    set_comp_rps: data['set_comp_rps'],
  });

  

  const handleSave = async (key, value) => {
    setSettings({ ...settings, [key]: value });

    try {
      await axios.post('http://localhost:4000/devices/writeModbus', { address: key, value: value });
    } catch (error) {
      console.error('Error updating mode:', error);
    }
  };

  return (
    <div className="table-container">
      <h2 className="table-header">냉매 사이클 상태 값</h2>
      <table className="table">
        <thead>
          <tr>
            <th>항목</th>
            <th>값</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>실내 온도</td>
            <td>{data.temp_in}</td>
          </tr>
          <tr>
            <td>외기 온도</td>
            <td>{data.temp_out}</td>
          </tr>
          <tr>
            <td>토출 온도</td>
            <td>{data.temp_discharge}</td>
          </tr>
          <tr>
            <td>흡입 온도</td>
            <td>{data.temp_suction}</td>
          </tr>
          <tr>
            <td>응축 온도</td>
            <td>{data.temp_cond}</td>
          </tr>
          <tr>
            <td>증발 온도</td>
            <td>{data.temp_eva}</td>
          </tr>
          <tr>
            <td>직류 전압</td>
            <td>{data.dc_voltage}</td>
          </tr>
          <tr>
            <td>교류 전류</td>
            <td>{data.ac_current}</td>
          </tr>
          <tr>
            <td>IMP 온도</td>
            <td>{data.temp_ipm}</td>
          </tr>
          <tr>
            <td>EEV 목표값</td>
            <td >
              <EditableValue value={settings.set_eev_step} onSave={(value) => handleSave('set_eev_step', value)} />
            </td>
          </tr>
          <tr>
            <td>EEV 현재값</td>
            <td>{data.eev_real}</td>
          </tr>
          <tr>
            <td>압축기 목표회전수</td>
            <td >
              <EditableValue value={data.set_comp_rps} onSave={(value) => handleSave('set_comp_rps', value)} />
            </td>
          </tr>
          <tr>
            <td>압축기 현재회전수</td>
            <td>{data.comp_realrps}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RefrigerantCycleStatus;
