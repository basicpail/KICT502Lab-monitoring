import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
{/* {deviceData.map((data, index) => (
  <div key={index} className=''>
    <StateBox key={index} data={data} category='Room1 '/>
  </div>
))} */}

const StateBox = ({category}) => {
  const data = useSelector(state => state.device?.deviceAllData);

  const [objectkeys, setObjectkeys] = useState([]);
  const [isRoomDevice, setIsRoomDevice] = useState(false);
  
  useEffect(()=>{
    if (category === 'Room1' || category === 'Room2') {
      setObjectkeys(Object.keys(data.Room1.SMD));
      setIsRoomDevice(true);
    }
    if (category === 'transmitter') {
      setObjectkeys(Object.keys(data['transmitter']));
    }
    if (category === 'powermeter') {
      setObjectkeys(Object.keys(data['powermeter']));
    }
  },[data])
  
  
  return (
    // <div className="flex items-center justify-center w-24 h-20 border bg-gray-200">
    <>
      {objectkeys.length > 0 && objectkeys.map((objectkey, index) => (
        <div key={index} className="w-full h-full bg-gray-200 text-center items-center flex flex-col justify-center">
          <div className='font-bold'> 
            {objectkey}
          </div>
          {isRoomDevice ? (
              <div>
                SMD: {data[category].SMD[objectkey]} SMU: {data[category].SMU[objectkey]}
              </div>
            ) : (
              <div>
                {data[category][objectkey]}
              </div>
            )}
        </div>
      ))}
    </>
  )
}

export default StateBox
