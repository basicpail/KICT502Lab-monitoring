// CompressorSettings.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditableValue from './EditableValue';
import useHandleSave from '../../hooks/useHandleSave';


const CompressorSettings = () => {
  const data = useSelector(state => state.device?.deviceAllData)
  const { handleWriteModbus } = useHandleSave();

  const [settings, setSettings] = useState({
    set_comp_controltime: data['set_comp_controltime'],
    set_comp_changelimit: data['set_comp_changelimit'],
  });

  const handleSave = async (key, value) => {
    setSettings({ ...settings, [key]: value });

    handleWriteModbus(key, value)
  };

  return (
    <div className="table-container">
      <h2 className="table-header">압축기 설정 값</h2>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>제어주기</td>
            <td >
              <EditableValue value={data.set_comp_controltime} onSave={(value) => handleSave('set_comp_controltime', value)} />
            </td>
          </tr>
          <tr>
            <td>제어량</td>
            <td >
              <EditableValue value={data.set_comp_changelimit} onSave={(value) => handleSave('set_comp_changelimit', value)} />
            </td>
          </tr>
          <tr>
            <td>에러</td>
            <td>{data.comp_err}</td>
          </tr>
          <tr>
            <td>트립</td>
            <td>{data.comp_trip}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompressorSettings;
