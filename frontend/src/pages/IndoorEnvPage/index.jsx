import React from 'react';
import { useSelector } from 'react-redux';
import DiffuserTable from '../Sections/DiffuserTable'
import AHUStatusTable from '../Sections/AHUStatusTable';
import IndoorEnvStatusTable from '../Sections/IndoorEnvStatusTable';
import SMUStatusTable from '../Sections/SMUStatusTable';

const IndoorEnvPage = () => {
  const data = useSelector(state => state.device?.deviceAllData);

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white min-h-screen p-4">
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 w-full mt-4">
        <div className="col-span-1 row-span-2 space-y-4">
          <AHUStatusTable />
          <IndoorEnvStatusTable />
          <DiffuserTable location={'거실1'} data={data} />
          <DiffuserTable location={'거실2'} data={data}/>
        </div>
        <div className="col-span-3 row-span-2 relative flex justify-center items-center bg-white">
          <img src="/indoorDrawing.png" alt="Refrigerant Cycle Diagram" className="object-contain h-full w-full" />
        </div>
        <div className="col-span-1 row-span-1 space-y-4">
          <DiffuserTable location={'침실1'} data={data}/>
          <DiffuserTable location={'침실2'} data={data}/>
          <DiffuserTable location={'침실3'} data={data}/>
        </div>
        <div className="col-span-1 row-span-1">
          <SMUStatusTable location={'SMU 상태값'}/>
        </div>
      </main>
    </div>
  );
};

export default IndoorEnvPage;
