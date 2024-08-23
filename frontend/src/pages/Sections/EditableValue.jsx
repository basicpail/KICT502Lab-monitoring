// EditableValue.jsx

import React, { useState } from 'react';

const EditableValue = ({ value, onSave, placeholder }) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleSave = () => {
    onSave(inputValue);
    setEditing(false);
  };

  const handleCancel = () => {
    // setInputValue(initialValue); // 입력값을 초기값으로 복원
    setEditing(false);
  };

  return (
    <div className="relative">
      {editing ? (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex items-center justify-center z-10">
          <div className="bg-white p-2 rounded shadow-md">
            <input
              type="text"
              className="border p-1 rounded text-black"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={placeholder}
            />
            <button className="ml-2 btn bg-blue-500 text-white" onClick={handleSave}>Save</button>
            <button className="ml-2 btn bg-red-500 text-white" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <span className="text-red-500 cursor-pointer" onClick={() => setEditing(true)}>{value}</span>
      )}
    </div>
  );
};

export default EditableValue;
