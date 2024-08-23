// RefrigerantCycleStatus.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditableValue from './EditableValue';
import axios from 'axios';
import axiosInstance from '../../utils/axios';

const SMUStatus = () => {
  const data = useSelector(state => state.device?.deviceAllData);

  const [settings, setSettings] = useState({
    smu_set_mode_living1: data['smu_set_mode_living1'],
    smu_set_position_living1: data['smu_set_position_living1'],
    smu_set_volume_living1: data['smu_set_volume_living1'],
    smu_set_volume_controltime_living1: data['smu_set_volume_controltime_living1'],
    smu_set_volume_ref_living1: data['smu_set_volume_ref_living1'],
    smu_set_volume_diff_living1: data['smu_set_volume_diff_living1'],
    smu_set_temp_living1: data['smu_set_temp_living1'],
    smu_set_temp_controltime_living1: data['smu_set_temp_controltime_living1'],
    smu_set_mode_living2: data['smu_set_mode_living2'],
    smu_set_position_living2: data['smu_set_position_living2'],
    smu_set_volume_living2: data['smu_set_volume_living2'],
    smu_set_volume_controltime_living2: data['smu_set_volume_controltime_living2'],
    smu_set_volume_ref_living2: data['smu_set_volume_ref_living2'],
    smu_set_volume_diff_living2: data['smu_set_volume_diff_living2'],
    smu_set_temp_living2: data['smu_set_temp_living2'],
    smu_set_temp_controltime_living2: data['smu_set_temp_controltime_living2'],
    smu_rpm_living1: data[''],
    smu_volume_living1: data[''],
    smu_temp_in_living1: data[''],
    smu_temp_supply_living1: data[''],
    smu_co2_living1: data[''], 
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
    <div className="table-container h-full">
      <h2 className="table-header">SMU 상태값</h2>
      <table className="table">
        <thead>
          <tr>
            <th>항목</th>
            <th>거실1</th>
            <th>거실2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>디퓨저 모드</td>
            <td >
              <EditableValue value={settings.smu_set_mode_living1} onSave={(value) => handleSave('smu_set_mode_living1', value)} />
            </td>
            <td >
            <EditableValue value={settings.smu_set_mode_living2} onSave={(value) => handleSave('smu_set_mode_living2', value)} />
            </td>
          </tr>
          <tr>
            <td>디퓨저 목표 개도값</td>
            <td >
              <EditableValue value={settings.smu_set_position_living1} onSave={(value) => handleSave('smu_set_position_living1', value)} />
            </td>
            <td >
              <EditableValue value={settings.smu_set_position_living2} onSave={(value) => handleSave('smu_set_position_living2', value)} />
            </td>
          </tr>
          <tr>
            <td>설정 풍량</td>
            <td >
              <EditableValue value={settings.smu_set_volume_living1} onSave={(value) => handleSave('smu_set_volume_living1', value)} />
            </td>
            <td >
              <EditableValue value={settings.smu_set_volume_living2} onSave={(value) => handleSave('smu_set_volume_living2', value)} />
            </td>
          </tr>
          <tr>
            <td>풍량제어 제어시간 간격</td>
            <td >
              <EditableValue value={settings.smu_set_volume_controltime_living1} onSave={(value) => handleSave('smu_set_volume_controltime_living1', value)} />
            </td>
            <td >
              <EditableValue value={settings.smu_set_volume_controltime_living2} onSave={(value) => handleSave('smu_set_volume_controltime_living2', value)} />
            </td>
          </tr>
          <tr>
            <td>풍량제어 목표도달 판단 기준값 </td>
            <td >
              <EditableValue value={settings.smu_set_volume_ref_living1} onSave={(value) => handleSave('smu_set_volume_ref_living1', value)} />
            </td>
            <td >
              <EditableValue value={settings.smu_set_volume_ref_living2} onSave={(value) => handleSave('smu_set_volume_ref_living2', value)} />
            </td>
          </tr>
          <tr>
            <td>풍량제어 디퓨저 개도 위치 조정값</td>
            <td >
              <EditableValue value={settings.smu_set_volume_diff_living1} onSave={(value) => handleSave('smu_set_volume_diff_living1', value)} />
            </td>
            <td >
              <EditableValue value={settings.smu_set_volume_diff_living2} onSave={(value) => handleSave('smu_set_volume_diff_living2', value)} />
            </td>
          </tr>
          <tr>
            <td>설정 온도</td>
            <td >
              <EditableValue value={settings.smu_set_temp_living1} onSave={(value) => handleSave('smu_set_temp_living1', value)} />
            </td>
            <td >
              <EditableValue value={settings.smu_set_temp_living2} onSave={(value) => handleSave('smu_set_temp_living2', value)} />
            </td>
          </tr>
          <tr>
            <td>온도제어 제어시간 간격</td>
            <td >
              <EditableValue value={settings.smu_set_temp_controltime_living1} onSave={(value) => handleSave('smu_set_temp_controltime_living1', value)} />
            </td>
            <td >
              <EditableValue value={settings.smu_set_temp_controltime_living2} onSave={(value) => handleSave('smu_set_temp_controltime_living2', value)} />
            </td>
          </tr>
          <tr>
            <td>현재 개도값</td>
            <td>{data.smu_current_position_living1}</td>
            <td>{data.smu_current_position_living2}</td>
          </tr>
          <tr>
            <td>FAN RPM</td>
            <td>{data.smu_rpm_living1}</td>
            <td>{data.smu_rpm_living2}</td>
          </tr>
          <tr>
            <td>현재 풍량</td>
            <td>{data.smu_volume_living1}</td>
            <td>{data.smu_volume_living2}</td>
          </tr>
          <tr>
            <td>실내 온도</td>
            <td>{data.smu_temp_in_living1}</td>
            <td>{data.smu_temp_in_living2}</td>
          </tr>
          <tr>
            <td>공급 대기 온도</td>
            <td>{data.smu_temp_supply_living1}</td>
            <td>{data.smu_temp_supply_living2}</td>
          </tr>
          <tr>
            <td>Co2 농도</td>
            <td>{data.smu_co2_living1}</td>
            <td>{data.smu_co2_living2}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SMUStatus;
