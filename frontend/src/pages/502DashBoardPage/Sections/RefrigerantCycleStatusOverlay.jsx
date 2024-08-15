import React from 'react';

const RefrigerantCycleStatusOverlay = () => {
  return (
    <div className="absolute inset-0 text-white">
      <div className="relative w-full h-full">
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '41%', left: '8%', transform: 'translate(-50%, -50%)' }}
        >
          증발온도[℃]: 27.5
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '60%', left: '17%', transform: 'translate(-50%, -50%)' }}
        >
          실내온도[℃]: 27.3
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '68%', left: '31%', transform: 'translate(-50%, -50%)' }}
        >
          흡입온도[℃]: 27.9
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '52%', right: '38%', transform: 'translate(50%, -50%)' }}
        >
          토출온도[℃]: 41.1
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '48%', right: '8%', transform: 'translate(50%, -50%)' }}
        >
          응축온도[℃]: 33.5
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ top: '58%', right: '8%', transform: 'translate(50%, -50%)' }}
        >
          외기온도[℃]: 31.2
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ bottom: '20%', right: '7%', transform: 'translate(-50%, 50%)' }}
        >
          EEV 목표값: 31.2
          <br />
          EEV 현재값: 31.2
        </span>
        <span
          className="absolute bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md"
          style={{ bottom: '12%', left: '52%', transform: 'translate(-50%, 50%)' }}
        >
          압축기 목표 회전수: 31.2
          <br />
          압축기 현재 회전수: 31.2
        </span>
      </div>
    </div>
  );
};

export default RefrigerantCycleStatusOverlay;


// import React from 'react';

// const RefrigerantCycleStatusOverlay = () => {
//   return (
//     <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
//       <div className="relative flex flex-col items-center w-full h-full">
//         <span className="absolute top-64 left-1 bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md">
//           증발온도[℃]: 27.5
//         </span>
//         <span className="absolute bottom-96 left-10 bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md">
//           실내온도[℃]: 27.3
//         </span>
//         <span className="absolute bottom-64 left-60 bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md">
//           흡입온도[℃]: 27.9
//         </span>
//         <span className="absolute bottom-96 right-80 bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md">
//           토출온도[℃]: 41.1
//         </span>
//         <span className="absolute top-80 right-1 bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md">
//           응축온도[℃]: 33.5
//         </span>
//         <span className="absolute top-104 right-1 bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md">
//           외기온도[℃]: 31.2
//         </span>
//         <span className="absolute bottom-36 left-188 bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md">
//           EEV 목표값: 31.2
//           <br/>
//           EEV 현재값: 31.2
//         </span>
//         <span className="absolute bottom-16 left-108 bg-gray-800 bg-opacity-75 px-2 py-1 rounded-md shadow-md">
//           압축기 목표 회전수: 31.2
//           <br/>
//           압축기 현재 회전수: 31.2
//         </span>
//       </div>
//     </div>
//   );
// };

// export default RefrigerantCycleStatusOverlay;
