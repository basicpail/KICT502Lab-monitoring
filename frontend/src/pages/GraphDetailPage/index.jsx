import React, { useState, useEffect } from 'react';
import RealtimeGraph from './Sections/RealtimeGraph';
import TimeFilterGrpah from './Sections/TimeFilterGrpah';

const GraphDetailPage = () => {
  const [currentComponent, setCurrentComponent] = useState('A');

  return (
    <div className='bg-gray-800 p-6 '>
      <button 
        onClick={() => setCurrentComponent('A')}
        className="px-4 py-2 mr-4 bg-blue-500 text-white rounded shadow hover:bg-blue-700"
      >
        실시간 그래프
      </button>
      <button 
        onClick={() => setCurrentComponent('B')}
        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-700"
      >
        시간 설정 그래프
      </button>

      {/* 조건부 렌더링 */}
      {currentComponent === 'A' && <RealtimeGraph />}
      {currentComponent === 'B' && <TimeFilterGrpah />}
    </div>
  );
};

export default GraphDetailPage;
