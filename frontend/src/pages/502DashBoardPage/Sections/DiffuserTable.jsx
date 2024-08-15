import React, { useState } from 'react';

const TableComponent = () => {
  const [sdOpen, setSdOpen] = useState(false);
  const [rdOpen, setRdOpen] = useState(false);

  const toggleSd = () => setSdOpen(!sdOpen);
  const toggleRd = () => setRdOpen(!rdOpen);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-600 bg-gray-200 text-gray-800">
        <thead>
          <tr>
            <th className="border border-gray-600 bg-gray-400 px-4 py-2" colSpan="3">거실 1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-600  px-4 py-2">급기풍량</td>
            <td className="border border-gray-600  px-4 py-2" colSpan="2">120 CMH</td>
          </tr>
          <tr>
            <td className="border border-gray-600  px-4 py-2">환기풍량</td>
            <td className="border border-gray-600  px-4 py-2" colSpan="2">-241 CMH</td>
          </tr>
          <tr>
            <td className="border border-gray-600 px-4 py-2">S D</td>
            <td className="border border-gray-600 px-4 py-2" colSpan="1" rowSpan="2">
              <div className="flex justify-around">
                <button
                  onClick={toggleSd}
                  className={`px-4 py-2 rounded-md shadow-md focus:outline-none ${
                    sdOpen ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'
                  }`}
                >
                  {sdOpen ? 'OPEN' : 'CLOSE'}
                </button>
              </div>
            </td>
            <tr>
                <td className="border border-gray-600 px-4 py-2">3,000</td>
            </tr>
            <tr>
                <td className="border border-gray-600 px-4 py-2">3,000</td>
            </tr>
          </tr>
          <tr>
            {/* <td className="border border-gray-600 bg-gray-100 px-4 py-2"></td> */}
          </tr>
          <tr>
            <td className="border border-gray-600  px-4 py-2">R D</td>
            <td className="border border-gray-600 px-4 py-2" colSpan="1" rowSpan="2">
              <div className="flex justify-around">
                <button
                  onClick={toggleRd}
                  className={`px-4 py-2 rounded-md shadow-md focus:outline-none ${
                    rdOpen ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'
                  }`}
                >
                  {rdOpen ? 'OPEN' : 'CLOSE'}
                </button>
              </div>
            </td>
            <tr>
                <td className="border border-gray-600  px-4 py-2">3,000</td>
            </tr>
            <tr>
                <td className="border border-gray-600  px-4 py-2">3,000</td>
            </tr>
          </tr>
          <tr>
            {/* <td className="border border-gray-600 bg-gray-100 px-4 py-2"></td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
