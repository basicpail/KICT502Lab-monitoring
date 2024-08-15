// FanControl.jsx
import React, { useState } from 'react';
import EditableValue from './EditableValue';

const FanControl = () => {
  const [fanStatus, setFanStatus] = useState({
    indoor: 'STOP',
    outdoor: 'STOP',
    comp: 'STOP',
    eev: 'STOP',
  });

  const toggleFanStatus = (fan) => {
    setFanStatus({
      ...fanStatus,
      [fan]: fanStatus[fan] === 'STOP' ? 'START' : 'STOP',
    });
  };

  const [manualValues, setManualValues] = useState({
    indoor: 3,
    outdoor: 2,
  });

  const handleSave = (fan, value) => {
    setManualValues({
      ...manualValues,
      [fan]: value,
    });
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">FAN 제어</h2>
      <table className="w-full text-center">
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
                onClick={() => toggleFanStatus('indoor')}
              >
                {fanStatus.indoor}
              </button>
            </td>
            <td>
              <EditableValue value={manualValues.indoor} onSave={(value) => handleSave('indoor', value)} />
            </td>
            <td>1,000 RPM</td>
          </tr>
          <tr>
            <td>실외팬</td>
            <td>
              <button
                className={`btn ${fanStatus.outdoor === 'START' ? 'bg-green-500' : 'bg-red-500'}`}
                onClick={() => toggleFanStatus('outdoor')}
              >
                {fanStatus.outdoor}
              </button>
            </td>
            <td>
              <EditableValue value={manualValues.outdoor} onSave={(value) => handleSave('outdoor', value)} />
            </td>
            <td>600 RPM</td>
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
            <td></td>
            <td></td>
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
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FanControl;
