// FlowStatus.jsx
import React from 'react';

const FlowStatus = () => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">풍량 상태값</h2>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th>구분</th>
            <th>급기</th>
            <th>환기</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>공조기</td>
            <td>1000000.0</td>
            <td>0.0</td>
          </tr>
          <tr>
            <td>거실 1</td>
            <td>-31.2</td>
            <td>0.0</td>
          </tr>
          <tr>
            <td>거실 2</td>
            <td>-100726464.0</td>
            <td>0.0</td>
          </tr>
          <tr>
            <td>침실 1</td>
            <td>1000000.0</td>
            <td>0.0</td>
          </tr>
          <tr>
            <td>침실 2</td>
            <td>-0.0</td>
            <td>0.0</td>
          </tr>
          <tr>
            <td>침실 3</td>
            <td>1000000.0</td>
            <td>0.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlowStatus;
