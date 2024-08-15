// CompressorSettings.jsx
import React, { useState } from 'react';
import EditableValue from './EditableValue';

const CompressorSettings = () => {
  const [settings, setSettings] = useState({
    compControlTime: 60,
    compChangeLimit: 4,
    compErrorCode: 0,
    compTripCode: 0,
  });

  const handleSave = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">압축기 설정 값</h2>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>제어주기</td>
            <td >
              <EditableValue value={settings.compControlTime} onSave={(value) => handleSave('compControlTime', value)} />
            </td>
          </tr>
          <tr>
            <td>제어량</td>
            <td >
              <EditableValue value={settings.compChangeLimit} onSave={(value) => handleSave('compChangeLimit', value)} />
            </td>
          </tr>
          <tr>
            <td>에러</td>
            <td>{settings.compErrorCode}</td>
          </tr>
          <tr>
            <td>트립</td>
            <td>{settings.compTripCode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompressorSettings;
