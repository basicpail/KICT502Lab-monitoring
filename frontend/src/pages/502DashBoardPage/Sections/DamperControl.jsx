// DamperControl.jsx

import React, { useState } from 'react';
import EditableValue from './EditableValue';

const DamperControl = () => {
  const [damperStatus, setDamperStatus] = useState(Array(12).fill('MAN'));
  const [settings, setSettings] = useState(Array(12).fill(4200));
  const [currentValues, setCurrentValues] = useState(Array(12).fill(0));

  const toggleDamperStatus = (index) => {
    setDamperStatus(damperStatus.map((status, i) =>
      i === index ? (status === 'MAN' ? 'AUTO' : 'MAN') : status
    ));
  };

  const handleSave = (index, value) => {
    setSettings(settings.map((setting, i) =>
      i === index ? value : setting
    ));
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">댐퍼 제어</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <table className="w-full text-center">
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
                      value={settings[index]} 
                      onSave={(value) => handleSave(index, value)} 
                      placeholder={`Enter value for DAMPER-${index + 1}`} 
                    />
                  </td>
                  <td>{currentValues[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <table className="w-full text-center">
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
                <tr key={index + 6}>
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
                      value={settings[index + 6]} 
                      onSave={(value) => handleSave(index + 6, value)} 
                      placeholder={`Enter value for DAMPER-${index + 7}`} 
                    />
                  </td>
                  <td>{currentValues[index + 6]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DamperControl;
