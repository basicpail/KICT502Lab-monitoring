// Settings.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditableValue from './EditableValue';
import useHandleSave from '../../hooks/useHandleSave';

const Settings = () => {
  const data = useSelector(state => state.device?.deviceAllData)
  const { handleWriteModbus } = useHandleSave();
  const [settings, setSettings] = useState({
    set_temp: data['set_temp'],
  });

  const handleSave = async (key, value) => {
    setSettings({
      ...settings,
      [key]: value,
    });

    handleWriteModbus(key,value)
  };

  return (
    <div className="table-container">
      <h2 className="table-header">운전 기준값 설정</h2>
      <table className="table">
        <thead>
          <tr>
            <th>항목</th>
            <th>설정값</th>
            <th>현재값</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>온도(℃)</td>
            <td>
              <EditableValue value={data.set_temp} onSave={(value) => handleSave('set_temp', value)} />
            </td>
            <td>{data.temp_in}</td>
          </tr>
          <tr>
            <td>토출정압(mm)</td>
            <td>
            </td>
            <td>{data.diff_pressure}</td>
          </tr>
          <tr>
            <td>CO2(PPM)</td>
            <td>
            </td>
            <td>{data.co2_in}</td>
          </tr>
          <tr>
            <td>PM2.5(㎍/㎥)</td>
            <td>
            </td>
            <td>{data.pm25_in}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Settings;
