import React from 'react';
import { useSelector } from 'react-redux';

const DamperStatusOverlay = () => {
  const data = useSelector(state => state.device?.deviceAllData);

  return (
    <div className="absolute inset-0 text-white">
      <div className="relative w-full h-full">
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '75%', left: '79%', transform: 'translate(-50%, -50%)' }}
        >
          {data.set_damper1}
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '86%', left: '41%', transform: 'translate(-50%, -50%)' }}
        >
          {data.set_damper2}
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '86%', left: '23%', transform: 'translate(-50%, -50%)' }}
        >
          {data.set_damper3}
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '82%', left: '71%', transform: 'translate(-50%, -50%)' }}
        >
          {data.set_damper4}
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '89%', left: '60%', transform: 'translate(-50%, -50%)' }}
        >
          {data.set_damper5}
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '67%', left: '77%', transform: 'translate(-50%, -50%)' }}
        >
          {data.set_damper6}
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '72%', left: '39%', transform: 'translate(-50%, -50%)' }}
        >
          {data.set_damper7}
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '72%', left: '23%', transform: 'translate(-50%, -50%)' }}
        >
          {data.set_damper8}
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '19%', left: '71%', transform: 'translate(-50%, -50%)' }}
        >
          {data.set_damper9}
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '19%', left: '51%', transform: 'translate(-50%, -50%)' }}
        >
          {data.set_damper10}
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '19%', left: '83%', transform: 'translate(-50%, -50%)' }}
        >
          {data.set_damper11}
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '19%', left: '33%', transform: 'translate(-50%, -50%)' }}
        >
          {data.set_damper12}
        </span>
      </div>
    </div>
  );
};

export default DamperStatusOverlay;
