import lttb from 'downsample-lttb';

const convertToKST = date => {
    const kstOffset = 9 * 60 * 60 * 1000; // 9 hours in milliseconds
    const kst =  new Date(date.getTime() + kstOffset);
    return kst.toISOString().slice(0, 19);
};

// 원본 데이터
const originalData = [
  { date: "2024-08-21T12:09:41", value: 19 , type: 'test1'},
  { date: "2024-08-21T12:09:41", value: 0 , type: 'test2'},
  { date: "2024-08-21T12:09:47", value: 19 , type: 'test3'},
  { date: "2024-08-21T12:09:47", value: 0 , type: 'test4'},
  { date: "2024-08-21T12:09:53", value: 19 , type: 'test5'},
  { date: "2024-08-21T12:09:41", value: 19 , type: 'test1'},
  { date: "2024-08-21T12:09:41", value: 0 , type: 'test2'},
  { date: "2024-08-21T12:09:47", value: 19 , type: 'test3'},
  { date: "2024-08-21T12:09:47", value: 0 , type: 'test4'},
  { date: "2024-08-21T12:09:53", value: 19 , type: 'test5'},
  { date: "2024-08-21T12:09:41", value: 19 , type: 'test1'},
  { date: "2024-08-21T12:09:41", value: 0 , type: 'test2'},
  { date: "2024-08-21T12:09:47", value: 19 , type: 'test3'},
  { date: "2024-08-21T12:09:47", value: 0 , type: 'test4'},
  { date: "2024-08-21T12:09:53", value: 19 , type: 'test5'},
  { date: "2024-08-21T12:09:41", value: 19 , type: 'test1'},
  { date: "2024-08-21T12:09:41", value: 0 , type: 'test2'},
  { date: "2024-08-21T12:09:47", value: 19 , type: 'test3'},
  { date: "2024-08-21T12:09:47", value: 0 , type: 'test4'},
  { date: "2024-08-21T12:09:53", value: 19 , type: 'test5'},
  { date: "2024-08-21T12:09:41", value: 19 , type: 'test1'},
  { date: "2024-08-21T12:09:41", value: 0 , type: 'test2'},
  { date: "2024-08-21T12:09:47", value: 19 , type: 'test3'},
  { date: "2024-08-21T12:09:47", value: 0 , type: 'test4'},
  { date: "2024-08-21T12:09:53", value: 19 , type: 'test5'},
  { date: "2024-08-21T12:09:41", value: 19 , type: 'test1'},
  { date: "2024-08-21T12:09:41", value: 0 , type: 'test2'},
  { date: "2024-08-21T12:09:47", value: 19 , type: 'test3'},
  { date: "2024-08-21T12:09:47", value: 0 , type: 'test4'},
  { date: "2024-08-21T12:09:53", value: 19 , type: 'test5'},
  { date: "2024-08-21T12:09:41", value: 19 , type: 'test1'},
  { date: "2024-08-21T12:09:41", value: 0 , type: 'test2'},
  { date: "2024-08-21T12:09:47", value: 19 , type: 'test3'},
  { date: "2024-08-21T12:09:47", value: 0 , type: 'test4'},
  { date: "2024-08-21T12:09:53", value: 19 , type: 'test5'},
];

// // 데이터 변환: [[ 1724209781000, 19 ]] 형식으로 변환
// const numericData = originalData.map(d => [new Date(d.date).getTime(), d.value, d.type]);
// console.log(numericData)
// // 샘플링
// const numPoints = 5;  // 원하는 포인트 수
// const sampledNumericData = lttb.processData(numericData, numPoints);

// // 샘플링 결과를 { date, value } 형식으로 변환
// const sampledData = sampledNumericData.map(d => ({
//     date: convertToKST(new Date(d[0])),  // 타임스탬프를 ISO 문자열로 변환
//     value: d[1],
//     type: d[2]
// }));

// // 결과 출력
// console.log(sampledData);




// 데이터와 다운샘플링할 포인트 수를 받아서 시간 기준으로 n등분한 후 다운샘플링
const processData = (data, numIntervals, numPointsPerInterval) => {
    // 데이터가 비어있으면 빈 배열 반환
    if (data.length === 0) return [];

    // 데이터의 시작과 끝 시점
    const startDate = new Date(data[0].date).getTime();
    const endDate = new Date(data[data.length - 1].date).getTime();

    // 각 구간의 시간 간격
    const intervalMs = (endDate - startDate) / numIntervals;

    // 결과를 저장할 배열
    let processedData = [];

    // 각 구간에 대해 다운샘플링 수행
    for (let i = 0; i < numIntervals; i++) {
        const intervalStart = startDate + i * intervalMs;
        const intervalEnd = startDate + (i + 1) * intervalMs;

        // 현재 구간의 데이터를 필터링
        const intervalData = data.filter(point => {
            const date = new Date(point.date).getTime();
            return date >= intervalStart && date < intervalEnd;
        });

        //console.log('intervalData: ',intervalData)
        const numericData = intervalData.map(d => [new Date(d.date).getTime(), d.value, d.type])
        console.log('numericData: ',numericData)
        // 다운샘플링 수행
        if (intervalData.length > 0) {
            // const downsampledData = lttb.processData(numericData.map(point => ({
            //     // date: new Date(point.date).getTime(),
            //     // value: point.value,
            //     // type: point.type
            //     date: new Date(point.date).getTime(),
            //     value: point.value,
            //     type: point.type
            // })), numPointsPerInterval);
            const downsampledData = lttb.processData(numericData, numPointsPerInterval)

            console.log('downsampledData: ', downsampledData)
            console.log('downsampledData[0][0]: ',downsampledData[0][0])
            // 다운샘플링된 데이터를 원래 형식으로 변환
            const intervalResult = downsampledData.map(point => ({
                date: convertToKST(new Date(point[0])),
                value: point[1],
                type: point[2]
            }));

            processedData = processedData.concat(intervalResult);
        }
    }

    return processedData;
};

// 예시 사용법
const numIntervals = 5; // 시간 기준으로 나눌 구간의 수
const numPointsPerInterval = 10; // 각 구간 내에서 유지할 포인트 수
const numericData = originalData.map(d => [new Date(d.date).getTime(), d.value, d.type]);
// const processedData = processData(numericData, numIntervals, numPointsPerInterval);
const processedData = processData(originalData, numIntervals, numPointsPerInterval);

console.log(processedData);
