import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditableValue from './EditableValue';
import axios from 'axios';
import axiosInstance from '../../utils/axios';

const SMUStatusTable = ({location}) => {
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

  const tdClass = "border border-gray-600 px-4 py-2";
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-600 bg-gray-200 text-gray-800">
        <thead>
          <tr>
            <th className="border border-gray-600 bg-gray-400 px-4 py-2" colSpan="3">{location}</th>
          </tr>
        </thead>
        <tbody className="border border-gray-600  px-4 py-2">
          <tr>
            <td className={tdClass} >항목</td>
            <td className={tdClass} >거실1</td>
            <td className={tdClass} >거실2</td>
          </tr>
          <tr>
            <td className={tdClass}>디퓨저 모드</td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_mode_living1} onSave={(value) => handleSave('smu_set_mode_living1', value)} />
            </td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_mode_living2} onSave={(value) => handleSave('smu_set_mode_living2', value)} />
            </td>
          </tr>
          <tr>
            <td className={tdClass} >디퓨저 목표 개도값</td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_position_living1} onSave={(value) => handleSave('smu_set_position_living1', value)} />
            </td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_position_living2} onSave={(value) => handleSave('smu_set_position_living2', value)} />
            </td>
          </tr>
          <tr>
            <td className={tdClass} >설정 풍량</td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_volume_living1} onSave={(value) => handleSave('smu_set_volume_living1', value)} />
            </td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_volume_living2} onSave={(value) => handleSave('smu_set_volume_living2', value)} />
            </td>
          </tr>
          <tr>
            <td className={tdClass} >풍량제어 제어시간 간격</td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_volume_controltime_living1} onSave={(value) => handleSave('smu_set_volume_controltime_living1', value)} />
            </td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_volume_controltime_living2} onSave={(value) => handleSave('smu_set_volume_controltime_living2', value)} />
            </td>
          </tr>
          <tr>
            <td className={tdClass} >풍량제어 목표도달 판단 기준값 </td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_volume_ref_living1} onSave={(value) => handleSave('smu_set_volume_ref_living1', value)} />
            </td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_volume_ref_living2} onSave={(value) => handleSave('smu_set_volume_ref_living2', value)} />
            </td>
          </tr>
          <tr>
            <td className={tdClass} >풍량제어 디퓨저 개도 위치 조정값</td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_volume_diff_living1} onSave={(value) => handleSave('smu_set_volume_diff_living1', value)} />
            </td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_volume_diff_living2} onSave={(value) => handleSave('smu_set_volume_diff_living2', value)} />
            </td>
          </tr>
          <tr>
            <td className={tdClass} >설정 온도</td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_temp_living1} onSave={(value) => handleSave('smu_set_temp_living1', value)} />
            </td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_temp_living2} onSave={(value) => handleSave('smu_set_temp_living2', value)} />
            </td>
          </tr>
          <tr>
            <td className={tdClass} >온도제어 제어시간 간격</td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_temp_controltime_living1} onSave={(value) => handleSave('smu_set_temp_controltime_living1', value)} />
            </td>
            <td className={tdClass} >
              <EditableValue value={settings.smu_set_temp_controltime_living2} onSave={(value) => handleSave('smu_set_temp_controltime_living2', value)} />
            </td>
          </tr>
          <tr>
            <td className={tdClass} >현재 개도값</td>
            <td className={tdClass} >{data.smu_current_position_living1}</td>
            <td className={tdClass} >{data.smu_current_position_living2}</td>
          </tr>
          <tr>
            <td className={tdClass} >FAN RPM</td>
            <td className={tdClass} >{data.smu_rpm_living1}</td>
            <td className={tdClass} >{data.smu_rpm_living2}</td>
          </tr>
          <tr>
            <td className={tdClass} >현재 풍량</td>
            <td className={tdClass} >{data.smu_volume_living1}</td>
            <td className={tdClass} >{data.smu_volume_living2}</td>
          </tr>
          <tr>
            <td className={tdClass} >실내 온도</td>
            <td className={tdClass} >{data.smu_temp_in_living1}</td>
            <td className={tdClass} >{data.smu_temp_in_living2}</td>
          </tr>
          <tr>
            <td className={tdClass} >공급 대기 온도</td>
            <td className={tdClass} >{data.smu_temp_supply_living1}</td>
            <td className={tdClass} >{data.smu_temp_supply_living2}</td>
          </tr>
          <tr>
            <td className={tdClass} >Co2 농도</td>
            <td className={tdClass} >{data.smu_co2_living1}</td>
            <td className={tdClass} >{data.smu_co2_living2}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SMUStatusTable;
