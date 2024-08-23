import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import axiosInstance from '../../utils/axios';

const ModeControl = () => {
  const data = useSelector(state => state.device?.deviceAllData);
  // console.log('Data Type:', typeof data); // 객체인지 확인
  // console.log('Full data:', data); // 전체 데이터 출력
  // console.log('Run Mode Key Exists:', 'run_mode' in data); // 'run_mode' 키 존재 확인
  const [selected, setSelected] = useState(parseInt(data['run_mode']));

  const handleToggle = async (index) => {
    // setSelected(index === selected ? null : index);
    setSelected(index);

    try {
      await axiosInstance.post('/devices/writeModbus', { address: 'run_mode', value: index });
    } catch (error) {
      console.error('Error updating mode:', error);
    }

  };

  const modes = [
    "정지",
    "냉방",
    "냉방+ERV",
    "난방",
    "난방+ERV",
    "제습",
    "ERV/환기",
    "외기냉방",
    "자동"
  ];

  return (
    <div className="table-container">
      <h2 className="table-header">운전 모드</h2>
      <div className="flex flex-col space-y-4">
        {modes.map((mode, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-lg">{mode}</span>
            <button
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${selected === index ? 'bg-green-500' : 'bg-gray-600'}`}
              onClick={() => handleToggle(index)}
            >
              {selected === index ? '●' : '○'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModeControl;
