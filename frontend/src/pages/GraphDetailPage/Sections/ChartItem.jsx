import {
    CategoryScale,
    Chart,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
  } from 'chart.js';
  import { RealTimeScale, StreamingPlugin } from 'chartjs-plugin-streaming';
  import React, { useEffect, useMemo, useRef, useState } from 'react';
  import { Line } from 'react-chartjs-2';
  import 'chartjs-adapter-luxon';
  import { useSelector, shallowEqual} from 'react-redux';
  
  Chart.register(
    StreamingPlugin,
    RealTimeScale,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  import dataList from '../const';
  
  const ChartItem = ({ graphDataList, duration }) => {
    //const chartRef = useRef(null);
    const chartData = useSelector(state => state.device?.graphData);
    const colors = [
      'rgba(255, 99, 132, 0.6)',   // Red
      'rgba(54, 162, 235, 0.6)',   // Blue
      'rgba(255, 206, 86, 0.6)',   // Yellow
      'rgba(75, 192, 192, 0.6)',   // Green
      'rgba(153, 102, 255, 0.6)',  // Purple
      'rgba(255, 159, 64, 0.6)',   // Orange
      'rgba(0, 255, 255, 0.6)',    // Cyan
      'rgba(255, 0, 255, 0.6)',    // Magenta
      'rgba(0, 255, 0, 0.6)',      // Lime
      'rgba(255, 105, 180, 0.6)'   // Pink
    ];
    
    const transformData = (data, entity) => {
      return data.map(entry => {
        return {
            x: entry.x,
            y: entry.y[dataList[entity]]
        };
      });
    };
  
    const createData = (graphDataList) => {
      try {
        //console.log('graphDataList: ',graphDataList)
        return {
          datasets: graphDataList.map((graphData, i) => {
            return {
              label: `${graphData['entity']}`,
              backgroundColor: colors[i],
              borderColor: colors[i],
              borderWidth: 3,
              data: transformData([...chartData], graphData['entity']),
              yAxisID: `y-axis-${i+1}`
            };
          })
        };
      } catch (error) {
        console.error('Error creating data:', error);
        return {
          datasets: []
        };
      }
    };
    

    const createOptions = (graphDataList) => {
      let options = {
          responsive: true,
          animation: false,
          scales: {
              x: {
                  type: 'realtime',
                  realtime: {
                      // duration: 20000, //전체길이가 20초  
                      duration: duration,
                      refresh: 2000,    
                      delay: 1000,
                      onRefresh: function(chart) {
                      }
                  }
              }
          },
          plugins: {
              streaming: {
                  frameRate: 30 // refresh rate
              }
          }
      };
  
      graphDataList.map((graphData, index) => {
          const yAxisKey = `y-axis-${index + 1}`;
          options.scales[yAxisKey] = {
              type: 'linear',
              position: 'right',
              beginAtZero: true,
              title: {
                  display: true,
                  text: `${graphData['entity']}`
              },
              grid: {
                  display: true,
                  drawOnChartArea: true
              }
          };
  
          // // 특정 Room1, Room2 카테고리의 경우 duration과 refresh 값을 다르게 설정
          // if (graphData['category'] === 'Room1' || graphData['category'] === 'Room2') {
          //     options.scales.x.realtime.duration = 50000;
          //     options.scales.x.realtime.refresh = 5000;
          // }
      });
  
      return options;
  };
    
  
    return (
      <div>
        <Line
          data={createData(graphDataList)}
          options={createOptions(graphDataList)}
        />
      </div>
    );
  };
  
  
  
  export default ChartItem;
  