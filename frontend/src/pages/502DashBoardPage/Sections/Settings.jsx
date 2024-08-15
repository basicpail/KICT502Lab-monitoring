// Settings.jsx
import React, { useState } from 'react';
import EditableValue from './EditableValue';

const Settings = () => {
  const [settings, setSettings] = useState({
    temperature: 26,
    humidity: 26,
    pressure: 28,
    co2: 395,
    pm25: 5,
  });

  const handleSave = (key, value) => {
    setSettings({
      ...settings,
      [key]: value,
    });
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">운전 기준값 설정</h2>
      <table className="w-full text-center">
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
              <EditableValue value={settings.temperature} onSave={(value) => handleSave('temperature', value)} />
            </td>
            <td>26</td>
          </tr>
          <tr>
            <td>습도(%)</td>
            <td>
              <EditableValue value={settings.humidity} onSave={(value) => handleSave('humidity', value)} />
            </td>
            <td>26</td>
          </tr>
          <tr>
            <td>토출정압(mm)</td>
            <td>
              <EditableValue value={settings.pressure} onSave={(value) => handleSave('pressure', value)} />
            </td>
            <td>28</td>
          </tr>
          <tr>
            <td>CO2(PPM)</td>
            <td>
              <EditableValue value={settings.co2} onSave={(value) => handleSave('co2', value)} />
            </td>
            <td>395</td>
          </tr>
          <tr>
            <td>PM2.5(㎍/㎥)</td>
            <td>
              <EditableValue value={settings.pm25} onSave={(value) => handleSave('pm25', value)} />
            </td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Settings;
