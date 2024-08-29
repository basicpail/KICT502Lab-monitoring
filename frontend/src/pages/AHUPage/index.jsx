
import React from 'react';
import ModeControl from '../Sections/ModeControl';
import Settings from '../Sections/Settings';
import RefrigerantCycleStatus from '../Sections/RefrigerantCycleStatus';
import FanControl from '../Sections/FanControl';
import DamperControl from '../Sections/DamperControl';
import EEVSettings from '../Sections/EEVSettings';
import CompressorSettings from '../Sections/CompressorSettings';
import RefrigerantCycleStatusOverlay from '../Sections/RefrigerantCycleStatusOverlay';
import DamperStatusOverlay from '../Sections/DamperStatusOverlay';

const AHUPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen p-4">
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 w-full mt-4">
        <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 row-span-2 space-y-4">
          <ModeControl />
          <Settings />
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 row-span-2 relative flex justify-center items-center bg-white">
          <img src="/502AHUPicture1.png" alt="Refrigerant Cycle Diagram" className="object-contain h-full w-full" />
          <RefrigerantCycleStatusOverlay />
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-2 relative flex justify-center items-center bg-white">
          <img src="/502AHUPicture2.png" alt="AHU Layout Diagram" className="object-contain h-full w-full" />
          <DamperStatusOverlay />
        </div>
        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 row-span-1 space-y-4">
          <EEVSettings />
          <CompressorSettings />
        </div>
        <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 row-span-2">
          <RefrigerantCycleStatus />
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 row-span-1">
          <FanControl />
        </div>
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 row-span-2">
          <DamperControl />
        </div>
      </main>
    </div>
  );
};

export default AHUPage;
