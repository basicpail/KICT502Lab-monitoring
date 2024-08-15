// RefrigerantCycleStatus.jsx
import React, { useState } from 'react';
import EditableValue from './EditableValue';

const RefrigerantCycleStatus = () => {
  const [cycleValues, setCycleValues] = useState({
    tempRoom: 19,
    tempOutair: 15,
    tempDischarge: 22,
    tempSuction: 282,
    tempCond: 6,
    tempEva: 4,
    dcVolatage: 62,
    acCurrent: 11,
    tempIMP: 10,
    targetEEV: 51,
    realEEV: 0,
    targetCompRps: 93,
    realCompRps: 5,
  });

  const handleSave = (key, value) => {
    setCycleValues({ ...cycleValues, [key]: value });
  };

  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">냉매 사이클 상태 값</h2>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th>항목</th>
            <th>값</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>실내 온도</td>
            <td>{cycleValues.tempRoom}</td>
          </tr>
          <tr>
            <td>외기 온도</td>
            <td>{cycleValues.tempOutair}</td>
          </tr>
          <tr>
            <td>토출 온도</td>
            <td>{cycleValues.tempDischarge}</td>
          </tr>
          <tr>
            <td>흡인 온도</td>
            <td>{cycleValues.tempSuction}</td>
          </tr>
          <tr>
            <td>응축 온도</td>
            <td>{cycleValues.tempCond}</td>
          </tr>
          <tr>
            <td>증발 온도</td>
            <td>{cycleValues.tempEva}</td>
          </tr>
          <tr>
            <td>직류 전압</td>
            <td>{cycleValues.dcVolatage}</td>
          </tr>
          <tr>
            <td>교류 전류</td>
            <td>{cycleValues.acCurrent}</td>
          </tr>
          <tr>
            <td>IMP 온도</td>
            <td>{cycleValues.tempIMP}</td>
          </tr>
          <tr>
            <td>EEV 목표값</td>
            <td >
              <EditableValue value={cycleValues.targetEEV} onSave={(value) => handleSave('targetEEV', value)} />
            </td>
          </tr>
          <tr>
            <td>EEV 현재값</td>
            <td>{cycleValues.realEEV}</td>
          </tr>
          <tr>
            <td>압축기 목표회전수</td>
            <td >
              <EditableValue value={cycleValues.targetCompRps} onSave={(value) => handleSave('targetCompRps', value)} />
            </td>
          </tr>
          <tr>
            <td>압축기 현재회전수</td>
            <td>{cycleValues.realCompRps}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RefrigerantCycleStatus;
