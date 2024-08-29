// Dashboard.jsx
import React from 'react';
import ModeControl from '../Sections/ModeControl';
import Settings from '../Sections/Settings';
import RefrigerantCycleStatus from '../Sections/RefrigerantCycleStatus';
import FlowStatus from '../Sections/FlowStatus';
import FanControl from '../Sections/FanControl';
import DamperControl from '../Sections/DamperControl';
import EEVSettings from '../Sections/EEVSettings';
import CompressorSettings from '../Sections/CompressorSettings';
import Diffuser from '../Sections/Diffuser';
import SMUStatus from '../Sections/SMUStatus';
import PowermeterStatus from '../Sections/PowermeterStatus';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen p-2">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full mt-4">
        <ModeControl />
        <div className="flex flex-col space-y-4">
          <Settings />
          <FlowStatus />
        </div>
        <RefrigerantCycleStatus />
        <div className='col-span-1 md:col-span-2 lg:col-span-2'>
          <SMUStatus />
        </div>
        <div className='flex flex-col space-y-4'>
          <EEVSettings />
          <CompressorSettings />
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-4">
          <DamperControl />
          <PowermeterStatus />
        </div>
        <div className='flex flex-col col-span-1 md:col-span-2 lg:col-span-2 space-y-4'>
          <Diffuser />
          <FanControl />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;


// // Dashboard.jsx
// import React from 'react';
// import ModeControl from '../Sections/ModeControl';
// import Settings from '../Sections/Settings';
// import RefrigerantCycleStatus from '../Sections/RefrigerantCycleStatus';
// import FlowStatus from '../Sections/FlowStatus';
// import FanControl from '../Sections/FanControl';
// import DamperControl from '../Sections/DamperControl';
// import EEVSettings from '../Sections/EEVSettings';
// import CompressorSettings from '../Sections/CompressorSettings';
// import Diffuser from '../Sections/Diffuser';

// const LandingPage = () => {
//   return (
//     <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen p-2">
//       <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-4" >
//         <ModeControl />
//         <div className="flex flex-col space-y-4">
//           <Settings />
//           <EEVSettings />
//         </div>
//         <RefrigerantCycleStatus />
//         <div className='flex flex-col space-y-4'>
//           <FlowStatus />
//           <Diffuser />
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

// export default LandingPage;