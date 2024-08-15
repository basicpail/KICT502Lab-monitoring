// FlowStatus.jsx
import React from 'react';

const PowermeterStatus = () => {
  return (
    <div className="table-container">
      <h2 className="table-header">전력량계</h2>
      <table className="table ">
        <thead>
          <tr>
            <th>누적전력량</th>
            <th>전압</th>
            <th>전류</th>
            <th>전력</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1000</td>
            <td>220.0</td>
            <td>0.0</td>
            <td>1.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PowermeterStatus;
