// // Dashboard.jsx
// import React from 'react';
// import ModeControl from './Sections/ModeControl';
// import Settings from './Sections/Settings';
// import RefrigerantCycleStatus from './Sections/RefrigerantCycleStatus';
// import FlowStatus from './Sections/FlowStatus';
// import FanControl from './Sections/FanControl';
// import DamperControl from './Sections/DamperControl';
// import EEVSettings from './Sections/EEVSettings';
// import CompressorSettings from './Sections/CompressorSettings';
// import Diffuser from './Sections/Diffuser';

// const Dashboard502 = () => {
//   return (
//     <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen p-4">
//       <header className="w-full flex justify-between items-center p-4 bg-gray-900">
//         <img src="/logo.png" alt="KICT" className="h-12" />
//         <div className="flex space-x-4">
//           <button className="btn">종합현황</button>
//           <button className="btn">AHU</button>
//           <button className="btn">실내환경</button>
//           <button className="btn">보정</button>
//           <button className="btn">트렌드</button>
//         </div>
//       </header>
//       <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-4" >
//         <ModeControl />
//         <div className='flex flex-col space-y-4'>
//           <FlowStatus />
//           <Diffuser />
//         </div>
//         <RefrigerantCycleStatus />
//         <div className="flex flex-col space-y-4">
//           <Settings />
//           <EEVSettings />
//         </div>
//         <FanControl />
//         <CompressorSettings />
//         <div className="col-span-2 md:col-span-2">
//           <DamperControl />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard502;

// import React from 'react';
// import ModeControl from './Sections/ModeControl';
// import Settings from './Sections/Settings';
// import RefrigerantCycleStatus from './Sections/RefrigerantCycleStatus';
// import FlowStatus from './Sections/FlowStatus';
// import FanControl from './Sections/FanControl';
// import DamperControl from './Sections/DamperControl';
// import EEVSettings from './Sections/EEVSettings';
// import Diffuser from './Sections/Diffuser';
// import CompressorSettings from './Sections/CompressorSettings';
// import RefrigerantCycleStatusOverlay from './Sections/RefrigerantCycleStatusOverlay';
// import AHULayoutStatusOverlay from './Sections/AHULayoutStatusOverlay';

// const Dashboard502 = () => {
//   return (
//     <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen p-4">
//       <header className="w-full flex justify-between items-center p-4 bg-gray-900">
//         <img src="/logo.png" alt="KICT" className="h-12" />
//         <div className="flex space-x-4">
//           <button className="btn">종합현황</button>
//           <button className="btn">AHU</button>
//           <button className="btn">실내환경</button>
//           <button className="btn">보정</button>
//           <button className="btn">트렌드</button>
//         </div>
//       </header>
//       <main className="grid grid-cols-6 gap-4 w-full mt-4">
//         <div className="col-span-1 row-span-2">
//           <ModeControl />
//         </div>
//         <div className="col-span-1 row-span-1">
//           <Settings />
//         </div>
//         <div className="col-span-4 row-span-3 relative flex justify-center items-center bg-white">
//           <img src="/502AHUPicture1.png" alt="Refrigerant Cycle Diagram" className="object-contain h-full w-full" />
//           <RefrigerantCycleStatusOverlay />
//         </div>
//         <div className="col-span-2 row-span-1">
//           <FanControl />
//         </div>
//         <div className="col-span-2 row-span-2">
//           <DamperControl />
//         </div>
//         <div className="col-span-1 row-span-1">
//           <EEVSettings />
//         </div>
//         <div className="col-span-1 row-span-1">
//           <CompressorSettings />
//         </div>
//         <div className="col-span-2 row-span-2 relative flex justify-center items-center bg-white">
//           <img src="/502AHUPicture2.png" alt="AHU Layout Diagram" className="object-contain h-full w-full" />
//           {/* <AHULayoutStatusOverlay /> */}
//         </div>
//         <div className="col-span-1 row-span-2">
//           <Diffuser />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard502;

// import React from 'react';
// import ModeControl from './Sections/ModeControl';
// import Settings from './Sections/Settings';
// import RefrigerantCycleStatus from './Sections/RefrigerantCycleStatus';
// import FlowStatus from './Sections/FlowStatus';
// import FanControl from './Sections/FanControl';
// import DamperControl from './Sections/DamperControl';
// import EEVSettings from './Sections/EEVSettings';
// import Diffuser from './Sections/Diffuser';
// import CompressorSettings from './Sections/CompressorSettings';
// import RefrigerantCycleStatusOverlay from './Sections/RefrigerantCycleStatusOverlay';
// import AHULayoutStatusOverlay from './Sections/AHULayoutStatusOverlay';
// import DiffuserTable from './Sections/DiffuserTable'

// const Dashboard502 = () => {
//   return (
//     <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen p-4">
//       <header className="w-full flex justify-between items-center p-4 bg-gray-900">
//         <img src="/logo.png" alt="KICT" className="h-12" />
//         <div className="flex space-x-4">
//           <button className="btn">종합현황</button>
//           <button className="btn">AHU</button>
//           <button className="btn">실내환경</button>
//           <button className="btn">보정</button>
//           <button className="btn">트렌드</button>
//         </div>
//       </header>
//       <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full mt-4">
//         <div className="col-span-1 row-span-2 space-y-4">
//           <ModeControl />
//           <Settings />
//         </div>
//         <div className="col-span-3 row-span-2 relative flex justify-center items-center bg-white">
//           <img src="/502AHUPicture1.png" alt="Refrigerant Cycle Diagram" className="object-contain h-full w-full" />
//           <RefrigerantCycleStatusOverlay />
//         </div>
//         <div className="col-span-2 row-span-2 relative flex justify-center items-center bg-white">
//           <img src="/502AHUPicture2.png" alt="AHU Layout Diagram" className="object-contain h-full w-full" />
//           <AHULayoutStatusOverlay />
//         </div>
//         <div className="col-span-1 row-span-1 space-y-4">
//           <EEVSettings />
//           <CompressorSettings />
//         </div>
//         <div className="col-span-1 row-span-2">
//           <RefrigerantCycleStatus />
//         </div>
//         <div className="col-span-2 row-span-1">
//           <FanControl />
//         </div>
//         <div className="col-span-2 row-span-2">
//           <DamperControl />
//         </div>
//         <div className="col-span-1 row-span-1">
//           <DiffuserTable />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard502;



import React from 'react';
import ModeControl from './Sections/ModeControl';
import Settings from './Sections/Settings';
import RefrigerantCycleStatus from './Sections/RefrigerantCycleStatus';
import FlowStatus from './Sections/FlowStatus';
import FanControl from './Sections/FanControl';
import DamperControl from './Sections/DamperControl';
import EEVSettings from './Sections/EEVSettings';
import Diffuser from './Sections/Diffuser';
import CompressorSettings from './Sections/CompressorSettings';
import RefrigerantCycleStatusOverlay from './Sections/RefrigerantCycleStatusOverlay';
import AHULayoutStatusOverlay from './Sections/AHULayoutStatusOverlay';
import DiffuserTable from './Sections/DiffuserTable'
import AHUStatusTable from './Sections/AHUStatusTable';
import IndoorEnvStatusTable from './Sections/IndoorEnvStatusTable';

const Dashboard502 = () => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen p-4">
      <header className="w-full flex justify-between items-center p-4 bg-gray-900">
        <img src="/logo.png" alt="KICT" className="h-12" />
        <div className="flex space-x-4">
          <button className="btn">종합현황</button>
          <button className="btn">AHU</button>
          <button className="btn">실내환경</button>
          <button className="btn">보정</button>
          <button className="btn">트렌드</button>
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full mt-4">
        <div className="col-span-1 row-span-2 space-y-4">
          <AHUStatusTable />
          <DiffuserTable />
          <DiffuserTable />
        </div>
        <div className="col-span-3 row-span-2 relative flex justify-center items-center bg-white">
          <img src="/indoorDrawing.png" alt="Refrigerant Cycle Diagram" className="object-contain h-full w-full" />
        </div>
        <div className="col-span-1 row-span-1 space-y-4">
          <DiffuserTable />
          <DiffuserTable />
          <DiffuserTable />
        </div>
        <div className="col-span-1 row-span-1">
          <IndoorEnvStatusTable />
        </div>
        
      </main>
    </div>
  );
};

export default Dashboard502;



