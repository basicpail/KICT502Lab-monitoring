import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const IndoorEnvStatusTable = () => {
  const data = useSelector(state => state.device?.deviceAllData);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-600 bg-gray-200 text-gray-800">
        <thead>
          <tr>
            <th className="border border-gray-600 bg-gray-400 px-4 py-2" colSpan="3">실내환경</th>
          </tr>
        </thead>
        <tbody>
          
        
          <tr>
            <td className="border border-gray-600  px-4 py-2">실내온도</td>
            <td className="border border-gray-600  px-4 py-2" colSpan="2">{data.temp_in}</td>
          </tr>
          <tr>
            <td className="border border-gray-600  px-4 py-2">외기온도</td>
            <td className="border border-gray-600  px-4 py-2" colSpan="2">{data.temp_out}</td>
          </tr>
          <tr>
            <td className="border border-gray-600  px-4 py-2">Co2</td>
            <td className="border border-gray-600  px-4 py-2" colSpan="2">{data.co2_in}</td>
          </tr>
          <tr>
            <td className="border border-gray-600  px-4 py-2">PM</td>
            <td className="border border-gray-600  px-4 py-2" colSpan="2">{data.pm25_in}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default IndoorEnvStatusTable;
