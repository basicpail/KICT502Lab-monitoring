// ModeControl.jsx
import React, { useState } from 'react';

const ModeControl = () => {
  const [selected, setSelected] = useState(null);

  const handleToggle = (index) => {
    setSelected(index === selected ? null : index);
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
    <div className="bg-gray-700 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">운전 모드</h2>
      <div className="flex flex-col space-y-2">
        {modes.map((mode, index) => (
          <div key={index} className="flex items-center justify-between">
            <span>{mode}</span>
            <button
              // className={`btn rounded-full ${selected === index ? 'bg-green-500' : 'bg-gray-600'}`}
              className={`btn rounded-full ${selected === index ? 'bg-green-500' : 'bg-gray-600'}`}
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
