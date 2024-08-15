import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const AHUStatusTable = () => {
  const data = useSelector(state => state.device?.deviceAllData);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-600 bg-gray-200 text-gray-800">
        <thead>
          <tr>
            <th className="border border-gray-600 bg-gray-400 px-4 py-2" colSpan="3">공조기</th>
          </tr>
        </thead>
        <tbody>
          
        
          <tr>
            <td className="border border-gray-600  px-4 py-2">급기풍량</td>
            <td className="border border-gray-600  px-4 py-2" colSpan="2">{data.ahu_supply} CMH</td>
          </tr>
          <tr>
            <td className="border border-gray-600  px-4 py-2">환기풍량</td>
            <td className="border border-gray-600  px-4 py-2" colSpan="2">{data.ahu_vent} CMH</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AHUStatusTable;
