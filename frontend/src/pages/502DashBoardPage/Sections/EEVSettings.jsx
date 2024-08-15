// EEVSettings.jsx
import React, { useState } from 'react';
import EditableValue from './EditableValue';

const EEVSettings = () => {
  const [settings, setSettings] = useState({
    eevStartPositionCool: 120,
    eevStartPositionHeat: 120,
    eevStartHoldingCool: 120,
    eevStartHoldingHeat: 120,
    eevSHCool: 120,
    eevSHHeat: 120,
    eevControlTimeCool: 120,
    eevControlTimeHeat: 120,
    eevSetPCool: 120,
    eevSetPHeat: 120,
    eevSetICool: 120,
    eevSetIHeat: 120,
  });

  const handleSave = (key, value) => {
    setSettings({ ...settings, [key]: value });
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">EEV 설정값</h2>
      <table className="w-full text-center">
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
              <EditableValue value={settings.eevStartPositionCool} onSave={(value) => handleSave('eevStartPositionCool', value)} />
            </td>
            <td >
              <EditableValue value={settings.eevStartPositionHeat} onSave={(value) => handleSave('eevStartPositionHeat', value)} />
            </td>
          </tr>
          <tr>
            <td>기동보류</td>
            <td >
              <EditableValue value={settings.eevStartHoldingCool} onSave={(value) => handleSave('eevStartHoldingCool', value)} />
            </td>
            <td >
              <EditableValue value={settings.eevStartHoldingHeat} onSave={(value) => handleSave('eevStartHoldingHeat', value)} />
            </td>
          </tr>
          <tr>
            <td>과열도</td>
            <td >
              <EditableValue value={settings.eevSHCool} onSave={(value) => handleSave('eevSHCool', value)} />
            </td>
            <td >
              <EditableValue value={settings.eevSHHeat} onSave={(value) => handleSave('eevSHHeat', value)} />
            </td>
          </tr>
          <tr>
            <td>제어주기</td>
            <td >
              <EditableValue value={settings.eevControlTimeCool} onSave={(value) => handleSave('eevControlTimeCool', value)} />
            </td>
            <td >
              <EditableValue value={settings.eevControlTimeHeat} onSave={(value) => handleSave('eevControlTimeHeat', value)} />
            </td>
          </tr>
          <tr>
            <td>P값</td>
            <td >
              <EditableValue value={settings.eevSetPCool} onSave={(value) => handleSave('eevSetPCool', value)} />
            </td>
            <td >
              <EditableValue value={settings.eevSetPHeat} onSave={(value) => handleSave('eevSetPHeat', value)} />
            </td>
          </tr>
          <tr>
            <td>I값</td>
            <td >
              <EditableValue value={settings.eevSetICool} onSave={(value) => handleSave('eevSetICool', value)} />
            </td>
            <td >
              <EditableValue value={settings.eevSetIHeat} onSave={(value) => handleSave('eevSetIHeat', value)} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EEVSettings;
