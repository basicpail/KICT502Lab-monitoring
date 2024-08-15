// FlowStatus.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const FlowStatus = () => {
  const data = useSelector(state => state.device?.deviceAllData);

  return (
    <div className="table-container">
      <h2 className="table-header">풍량 상태값</h2>
      <table className="table">
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
            <td>{data.ahu_supply}</td>
            <td>{data.ahu_vent}</td>
          </tr>
          <tr>
            <td>거실 1</td>
            <td>{data.supply_living1}</td>
            <td>{data.vent_living1}</td>
          </tr>
          <tr>
            <td>거실 2</td>
            <td>{data.supply_living2}</td>
            <td>{data.vent_living2}</td>
          </tr>
          <tr>
            <td>침실 1</td>
            <td>{data.supply_bedroom1}</td>
            <td>{data.vent_bedroom1}</td>
          </tr>
          <tr>
            <td>침실 2</td>
            <td>{data.supply_bedroom2}</td>
            <td>{data.vent_bedroom2}</td>
          </tr>
          <tr>
            <td>침실 3</td>
            <td>{data.supply_bedroom3}</td>
            <td>{data.vent_bedroom3}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlowStatus;
