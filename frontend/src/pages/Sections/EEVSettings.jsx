// EEVSettings.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditableValue from './EditableValue';
import axios from 'axios';
import axiosInstance from '../../utils/axios';

const EEVSettings = () => {
  const data = useSelector(state => state.device?.deviceAllData)

  const [settings, setSettings] = useState({
    set_eev_startposition_cool: data['set_eev_startposition_cool'],
    set_eev_startholding_cool: data['set_eev_startholding_cool'],
    set_eev_sh_cool: data['set_eev_sh_cool'],
    set_eev_controltime_cool: data['set_eev_controltime_cool'],
    set_eev_p_cool: data['set_eev_p_cool'],
    set_eev_i_cool: data['set_eev_i_cool'],
    set_eev_startposition_heat: data['set_eev_startposition_heat'],
    set_eev_startholding_heat: data['set_eev_startholding_heat'],
    set_eev_sh_heat: data['set_eev_sh_heat'],
    set_eev_controltime_heat: data['set_eev_controltime_heat'],
    set_eev_p_heat: data['set_eev_p_heat'],
    set_eev_i_heat: data['set_eev_i_heat'],
  });

  const handleSave = async (key, value) => {
    setSettings({ ...settings, [key]: value });

    try {
      await axiosInstance.post('/devices/writeModbus', { address: key, value: value });
    } catch (error) {
      console.error('Error updating mode:', error);
    }
  };

  return (
    <div className="table-container">
      <h2 className="table-header">EEV 설정값</h2>
      <table className="table">
        <thead>
          <tr>
            <th>항목</th>
            <th>냉방</th>
            <th>난방</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>초기개도</td>
            <td >
              <EditableValue value={settings.set_eev_startposition_cool} onSave={(value) => handleSave('set_eev_startposition_cool', value)} />
            </td>
            <td >
              <EditableValue value={settings.set_eev_startposition_heat} onSave={(value) => handleSave('set_eev_startposition_heat', value)} />
            </td>
          </tr>
          <tr>
            <td>기동보류</td>
            <td >
              <EditableValue value={settings.set_eev_startholding_cool} onSave={(value) => handleSave('set_eev_startholding_cool', value)} />
            </td>
            <td >
              <EditableValue value={settings.set_eev_startholding_heat} onSave={(value) => handleSave('set_eev_startholding_heat', value)} />
            </td>
          </tr>
          <tr>
            <td>과열도</td>
            <td >
              <EditableValue value={settings.set_eev_sh_cool} onSave={(value) => handleSave('set_eev_sh_cool', value)} />
            </td>
            <td >
              <EditableValue value={settings.set_eev_sh_heat} onSave={(value) => handleSave('set_eev_sh_heat', value)} />
            </td>
          </tr>
          <tr>
            <td>제어주기</td>
            <td >
              <EditableValue value={settings.set_eev_controltime_cool} onSave={(value) => handleSave('set_eev_controltime_cool', value)} />
            </td>
            <td >
              <EditableValue value={settings.set_eev_controltime_heat} onSave={(value) => handleSave('set_eev_controltime_heat', value)} />
            </td>
          </tr>
          <tr>
            <td>P값</td>
            <td >
              <EditableValue value={settings.set_eev_p_cool} onSave={(value) => handleSave('set_eev_p_cool', value)} />
            </td>
            <td >
              <EditableValue value={settings.set_eev_p_heat} onSave={(value) => handleSave('set_eev_p_heat', value)} />
            </td>
          </tr>
          <tr>
            <td>I값</td>
            <td >
              <EditableValue value={settings.set_eev_i_cool} onSave={(value) => handleSave('set_eev_i_cool', value)} />
            </td>
            <td >
              <EditableValue value={settings.set_eev_i_heat} onSave={(value) => handleSave('set_eev_i_heat', value)} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EEVSettings;
