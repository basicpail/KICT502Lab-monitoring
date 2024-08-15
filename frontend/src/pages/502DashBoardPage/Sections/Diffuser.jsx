// Diffuser.jsx
import React, { useState } from 'react';
import EditableValue from './EditableValue';

const Diffuser = () => {
  const [diffuserSettings, setDiffuserSettings] = useState({
    거실1: { supply: 3000, exhaust: 3000 },
    거실2: { supply: 3000, exhaust: 3000 },
    침실1: { supply: 3000, exhaust: 3000 },
    침실2: { supply: 3000, exhaust: 3000 },
    침실3: { supply: 3000, exhaust: 3000 },
  });

  const handleSave = (room, type, value) => {
    setDiffuserSettings({
      ...diffuserSettings,
      [room]: {
        ...diffuserSettings[room],
        [type]: value,
      },
    });
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h2 className="text-lg font-extrabold mb-2 ">디퓨저</h2>
      {/* <table className="w-full text-center " style={{ lineHeight: '2' }} > */}
      <table className="w-full text-center ">
        <thead>
          <tr>
            <th>구분</th>
            <th>급기 설정값</th>
            <th>급기 현재값</th>
            <th>환기 설정값</th>
            <th>환기 현재값</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(diffuserSettings).map((room, index) => (
            <tr key={index}>
              <td>{room}</td>
              <td>
                <EditableValue value={diffuserSettings[room].supply} onSave={(value) => handleSave(room, 'supply', value)} />
              </td>
              <td>3000</td>
              <td>
                <EditableValue value={diffuserSettings[room].exhaust} onSave={(value) => handleSave(room, 'exhaust', value)} />
              </td>
              <td>3000</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Diffuser;
