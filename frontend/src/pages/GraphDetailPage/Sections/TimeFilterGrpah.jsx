import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { Line } from 'react-chartjs-2';
import dataList from '../../../utils/const';

import axiosInstance from '../../../utils/axios'

const TimeFilterGraph = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedDataList, setSelectedDataList] = useState([]);
    const [maxSelected] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [chartDataList, setChartDataList] = useState(() => {
        const savedCharts = localStorage.getItem('chartDataList');
        return savedCharts ? JSON.parse(savedCharts) : [];
    });

    useEffect(() => {
        localStorage.setItem('chartDataList', JSON.stringify(chartDataList));
    }, [chartDataList]);


    const handleFetchData = async (event) => {
        event.preventDefault();
        try {
            // const startDate = '2023-01-01';
            // const endDate = '2023-10-30';
            // const types = ['data1', 'data2', 'data3'];
            // const data = generateData(50, startDate, endDate, types);
            console.log('startDate: ', startDate);
            console.log('endDate: ', endDate);
            console.log('selectedDataList: ', selectedDataList);
            
            const response = await axiosInstance.post('/devices/getDeviceDataFromDB', {
            startDate,
            endDate,
            selectedDataList,
            });
            const data = response.data;

            // const data = [
            //   { "date": "2023-01-01", "value": 10, "type": "data1" },
            //   { "date": "2023-01-02", "value": 15, "type": "data1" },
            //   { "date": "2023-01-03", "value": 8, "type": "data1" },
            //   { "date": "2023-01-04", "value": 12, "type": "data1" },
            //   { "date": "2023-01-05", "value": 14, "type": "data1" },
            //   { "date": "2023-01-01", "value": 5, "type": "data2" },
            //   { "date": "2023-01-02", "value": 7, "type": "data2" },
            //   { "date": "2023-01-03", "value": 6, "type": "data2" },
            //   { "date": "2023-01-04", "value": 9, "type": "data2" },
            //   { "date": "2023-01-05", "value": 11, "type": "data2" },
            //   { "date": "2023-01-01", "value": 20, "type": "data3" },
            //   { "date": "2023-01-02", "value": 18, "type": "data3" },
            //   { "date": "2023-01-03", "value": 22, "type": "data3" },
            //   { "date": "2023-01-04", "value": 19, "type": "data3" },
            //   { "date": "2023-01-05", "value": 23, "type": "data3" }
            // ]
            
            if (!data || !data.length) {
            throw new Error("No data returned");
            }

            const datasets = selectedDataList.map(selectedData => {
                const dataValues = data.filter(item => item.type === selectedData).map(item => {
                  return {
                    x: item.date,
                    y: item.value
                  }
                });
                return {
                    label: selectedData,
                    data: dataValues,
                    borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 1)`,
                    backgroundColor: 'rgba(0,0,0,0)',
                    fill: false,
                };
            });

            const newChartData = {
                datasets,
            };

            setChartDataList(prevList => [...prevList, newChartData]);
            setSelectedDataList([]);
            toast.info('그래프 추가 완료')
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error('그래프 생성 실패')
        }
    };

    const handleDeleteChart = (index) => {
        setChartDataList(prevList => prevList.filter((_, i) => i !== index));
        };

    const handleDataListChange = (e) => {
        const { value, checked } = e.target;
        setSelectedDataList((prevSelected) => {
            if (checked && prevSelected.length < maxSelected) {
              return [...prevSelected, value];
            } else if (!checked) {
              return prevSelected.filter(item => item !== value);
            } else {
              toast.warning(`최대 ${maxSelected}개까지 선택 가능합니다.`);
              return prevSelected;
            }
        });
    };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  
  const filteredDataList = Object.keys(dataList).filter(key =>
    key.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-800 p-6">
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        <div className="grid grid-cols-1 xl:col-span-3 gap-4">
          <div className="w-full bg-white p-4 rounded-lg shadow-lg">
            {chartDataList.slice().reverse().map((chartData, index) => (
                <div key={index} className="relative">
                    <Line data={chartData}/>
                    <button
                        onClick={() => handleDeleteChart(chartDataList.length - 1 - index)}
                        className="absolute top-0 right-0 mt-2 mr-2 px-2 py-1 bg-red-500 text-white rounded shadow hover:bg-red-700"
                    >
                    삭제
                    </button>
                </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg xl:col-span-1">
          <form className="space-y-6">
            <div>
                <label className="block text-lg font-medium text-gray-700">
                Start Date:
                </label>
                <input
                type="datetime-local"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                />
            </div>
            <div>
                <label className="block text-lg font-medium text-gray-700">
                End Date:
                </label>
                <input
                type="datetime-local"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                />
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
            <div className="mt-1 h-60 overflow-y-auto border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg">
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
            <div className="flex justify-center space-x-4 mb-4">
                <button 
                    onClick={handleFetchData}
                    className="px-4 py-2 bg-gray-500 text-white rounded shadow hover:bg-gray-700"
                >
                    그래프 추가하기
                </button>
            </div>
            {selectedDataList.length >= maxSelected && (
              <p className="text-red-500 text-sm mt-2">최대 {maxSelected}개 까지 선택 가능합니다.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TimeFilterGraph;
