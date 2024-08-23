// Diffuser.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditableValue from './EditableValue';
import axios from 'axios';
import axiosInstance from '../../utils/axios';

const Diffuser = () => {
  const data = useSelector(state => state.device?.deviceAllData)
  
  const [settings, setSettings] = useState({
    set_diffuser_supply_living1: data['set_diffuser_supply_living1'],
    set_diffuser_vent_living1: data['set_diffuser_vent_living1'],
    set_diffuser_supply_living2: data['set_diffuser_supply_living2'],
    set_diffuser_vent_living2: data['set_diffuser_vent_living2'],
    set_diffuser_supply_bedroom1: data['set_diffuser_supply_bedroom1'],
    set_diffuser_vent_bedroom1: data['set_diffuser_vent_bedroom1'],
    set_diffuser_supply_bedroom2: data['set_diffuser_supply_bedroom2'],
    set_diffuser_vent_bedroom2: data['set_diffuser_vent_bedroom2'],
    set_diffuser_supply_bedroom3: data['set_diffuser_supply_bedroom3'],
    set_diffuser_vent_bedroom3: data['set_diffuser_vent_bedroom3'],
  });


  const handleSave = async (key, value) => {
    setSettings({ ...settings, [key]: value });
    try {
      await axiosInstance.post('/devices/writeModbus', { address: key, value: value });
    } catch (error) {
      console.error('Error updating mode:', error);
    }
  };

  return (
    <div className="table-container">
      <h2 className="table-header ">디퓨저</h2>
      {/* <table className="w-full text-center " style={{ lineHeight: '2' }} > */}
      <table className="table auto-fit-text">
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
          <tr>
            <td>거실1</td>
            <td >
              <EditableValue value={settings.set_diffuser_supply_living1} onSave={(value) => handleSave('set_diffuser_supply_living1', value)} />
            </td>
            <td >{data.diffuser_supply_living1}</td>
            <td >
              <EditableValue value={settings.set_diffuser_vent_living1} onSave={(value) => handleSave('set_diffuser_vent_living1', value)} />
            </td>
            <td >{data.diffuser_vent_living1}</td>
          </tr>
          <tr>
            <td>거실2</td>
            <td >
              <EditableValue value={settings.set_diffuser_supply_living2} onSave={(value) => handleSave('set_diffuser_supply_living2', value)} />
            </td>
            <td >{data.diffuser_supply_living2}</td>
            <td >
              <EditableValue value={settings.set_diffuser_vent_living2} onSave={(value) => handleSave('set_diffuser_vent_living2', value)} />
            </td>
            <td >{data.diffuser_vent_living2}</td>
          </tr>
          <tr>
            <td>침실1</td>
            <td >
              <EditableValue value={settings.set_diffuser_supply_bedroom1} onSave={(value) => handleSave('set_diffuser_supply_bedroom1', value)} />
            </td>
            <td >{data.diffuser_supply_bedroom1}</td>
            <td >
              <EditableValue value={settings.set_diffuser_vent_bedroom1} onSave={(value) => handleSave('set_diffuser_vent_bedroom1', value)} />
            </td>
            <td >{data.diffuser_vent_bedroom1}</td>
          </tr>
          <tr>
            <td>침실2</td>
            <td >
              <EditableValue value={settings.set_diffuser_supply_bedroom2} onSave={(value) => handleSave('set_diffuser_supply_bedroom2', value)} />
            </td>
            <td >{data.diffuser_supply_bedroom2}</td>
            <td >
              <EditableValue value={settings.set_diffuser_vent_bedroom2} onSave={(value) => handleSave('set_diffuser_vent_bedroom2', value)} />
            </td>
            <td >{data.diffuser_vent_bedroom2}</td>
          </tr>
          <tr>
            <td>침실3</td>
            <td >
              <EditableValue value={settings.set_diffuser_supply_bedroom3} onSave={(value) => handleSave('set_diffuser_supply_bedroom3', value)} />
            </td>
            <td >{data.diffuser_supply_bedroom3}</td>
            <td >
              <EditableValue value={settings.set_diffuser_vent_bedroom3} onSave={(value) => handleSave('set_diffuser_vent_bedroom3', value)} />
            </td>
            <td >{data.diffuser_vent_bedroom3}</td>
          </tr>
          {/* {Object.keys(diffuserSettings).map((room, index) => (
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
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Diffuser;
