import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import ChartItem  from './ChartItem';
import dataList from '../../../utils/const';


const RealtimeGraph = () => {
  const [selectedDataList, setSelectedDataList] = useState(() => {
    const savedSelectedDataList = localStorage.getItem('selectedDataList');
    return savedSelectedDataList ? JSON.parse(savedSelectedDataList) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [graphDataList, setGraphDataList] = useState(() => {
    const savedCharts = localStorage.getItem('graphDataList');
    return savedCharts ? JSON.parse(savedCharts) : [];
  });
  const [maxSelected] = useState(10);
  const [duration, setDuration] = useState(() => {
    const savedDuration = localStorage.getItem('graphDuration');
    return savedDuration ? JSON.parse(savedDuration) : 20000;
  });

  useEffect(() => {
    localStorage.setItem('selectedDataList', JSON.stringify(selectedDataList));
    localStorage.setItem('graphDataList', JSON.stringify(graphDataList));
    localStorage.setItem('graphDuration', JSON.stringify(duration));
  }, [selectedDataList, graphDataList, duration]);

  const handleDataListChange = (e) => {
    const { value, checked } = e.target;
    setSelectedDataList((prevSelected) => {
      if (checked && prevSelected.length >= maxSelected) {
        toast.warning(`최대 ${maxSelected}개까지 선택 가능합니다.`);
        return prevSelected; 
      }

      const updatedList = checked
        ? [...prevSelected, value]
        : prevSelected.filter(item => item !== value);

      const updatedGraphDataList = updatedList.map(item => {
          return {entity: item}
        }
      );
      setGraphDataList(updatedGraphDataList);
      return updatedList;
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  
  const filteredDataList = Object.keys(dataList).filter(key =>
    key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-screen bg-gray-800 p-6">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        <div className="grid grid-cols-1 xl:col-span-3 gap-4">
          <div className="w-full bg-white p-4 rounded-lg shadow-lg">
            <ChartItem graphDataList={graphDataList} duration={duration} />
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg xl:col-span-1">
          <form className="space-y-6">
          <div>
              <label className="block text-lg font-medium text-gray-700">
                시간 간격 조절:
              </label>
              <input
                type="range"
                min={10000}
                max={200000}
                step={1000}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full"
              />
              <p> {duration / 1000} 초</p>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                데이터 검색:
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
              />
            </div>
            <div className="mt-1 h-72 overflow-y-auto border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg">
              {filteredDataList.map(data => (
                <div key={data} className="px-4 py-2">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      value={data}
                      onChange={handleDataListChange}
                      checked={selectedDataList.includes(data)}
                      className="form-checkbox"
                    />
                    <span className="ml-2">{data}</span>
                  </label>
                </div>
              ))}
            </div>
            {selectedDataList.length >= 10 && (
              <p className="text-red-500 text-sm mt-2">최대 {maxSelected}개 까지 선택 가능합니다.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RealtimeGraph;
