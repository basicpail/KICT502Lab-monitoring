import React, { useState, useEffect } from 'react';
import EditableValue from './EditableValue';
import axios from 'axios';
import axiosInstance from '../../utils/axios';

const TableComponent = ({location, data}) => {
  const [sdOpen, setSdOpen] = useState(false);
  const [rdOpen, setRdOpen] = useState(false);
  const [filteredData, setFilteredData] = useState({});
  const [locationToEng, setLocationToEng] = useState("");
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

  //const toggleSd = () => setSdOpen(!sdOpen);
  //const toggleRd = () => setRdOpen(!rdOpen);

  const toggleSd = async (location, value) => {
    setSdOpen(!sdOpen);
    console.log('toggleSd:',sdOpen)
    console.log('toggleSdLocation: ', location)
    try {
      if (sdOpen === true){
        await axiosInstance.post('/devices/writeModbus', { address: `set_sdopen_${location}`, value: sdOpen });
      }
      if (sdOpen === false){
        await axiosInstance.post('/devices/writeModbus', { address: `set_sdclose_${location}`, value: sdOpen });
      }
    } catch (error) {
      console.error('Error updating mode:', error);
    }
  }

  const toggleRd = async (location, value) => {
    setRdOpen(!rdOpen);
    console.log('toggleRd!')
    console.log('toggleRdLocation: ', location)
    try {
      if (rdOpen === true){
        await axiosInstance.post('/devices/writeModbus', { address: `set_rdopen_${location}`, value: rdOpen });
      }
      if (rdOpen === false){
        await axiosInstance.post('/devices/writeModbus', { address: `set_rdclose_${location}`, value: rdOpen });
      }
    } catch (error) {
      console.error('Error updating mode:', error);
    }
  }

  const handleSave = async (key, value) => {
    setSettings({ ...settings, [key]: value });

    try {
      await axiosInstance.post('/devices/writeModbus', { address: 1, value: value });
    } catch (error) {
      console.error('Error updating mode:', error);
    }
  };

  useEffect(() => {
    const locationKey = locationToKey(location);
    // const filtered = Object.keys(data)
    //   .filter(key => key.includes(locationKey))
    //   .reduce((obj, key) => {
    //     obj[key] = data[key];
    //     return obj;
    //   }, {});
    // setFilteredData(filtered);
    setLocationToEng(locationKey);
    //console.log('filterdData: ',filteredData)
  }, [data]);

  const locationToKey = (loc) => {
    switch (loc) {
      case '거실1':
        return 'living1';
      case '거실2':
        return 'living2';
      case '침실1':
        return 'bedroom1';
      case '침실2':
        return 'bedroom2';
      case '침실3':
        return 'bedroom3';
      default:
        return '';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-600 bg-gray-200 text-gray-800">
        <thead>
          <tr>
            <th className="border border-gray-600 bg-gray-400 px-4 py-2" colSpan="3">{location}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-600  px-4 py-2">급기풍량</td>
            <td className="border border-gray-600  px-4 py-2" colSpan="2">{data[`supply_${locationToEng}`]} CMH</td>
          </tr>
          <tr>
            <td className="border border-gray-600  px-4 py-2">환기풍량</td>
            <td className="border border-gray-600  px-4 py-2" colSpan="2">{data[`vent_${locationToEng}`]} CMH</td>
          </tr>
          <tr>
            <td className="border border-gray-600 px-4 py-2">S D</td>
            <td className="border border-gray-600 px-4 py-2" colSpan="1" rowSpan="2">
              <div className="flex justify-around">
                <button
                  onClick={() => toggleSd(locationToEng)}
                  className={`px-4 py-2 rounded-md shadow-md focus:outline-none ${
                    // sdOpen ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'
                    sdOpen ? 'bg-gray-300 text-black' :'bg-green-500 text-white'
                  }`}
                >
                  {sdOpen ? 'OPEN' : 'CLOSE'}
                </button>
              </div>
            </td>
            <tr>
              <td className ="border border-gray-600 px-4 py-2">
                <EditableValue  value={settings[`set_diffuser_supply_${locationToEng}`]} onSave={(value) => handleSave(`set_diffuser_supply_${locationToEng}`, value)} />
              </td>
            </tr>
            <tr>
                <td className="border border-gray-600 px-4 py-2">{data[`diffuser_supply_${locationToEng}`]} </td>
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
                  onClick={() => toggleRd(locationToEng)}
                  className={`px-4 py-2 rounded-md shadow-md focus:outline-none ${
                    rdOpen ? 'bg-gray-300 text-black': 'bg-green-500 text-white' 
                  }`}
                >
                  {rdOpen ? 'OPEN' : 'CLOSE'}
                </button>
              </div>
            </td>
            <tr>
              <td className ="border border-gray-600 px-4 py-2">
                <EditableValue  value={settings[`set_diffuser_vent_${locationToEng}`]} onSave={(value) => handleSave(`set_diffuser_vent_${locationToEng}`, value)} />
              </td>
            </tr>
            <tr>
                <td className="border border-gray-600  px-4 py-2">{data[`diffuser_vent_${locationToEng}`]} </td>
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
