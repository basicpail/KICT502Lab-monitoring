import { useState } from 'react';
import axiosInstance from '../utils/axios';
import { toast } from 'react-toastify';

const useHandleSave = () => {
  const [settings, setSettings] = useState({});

  const handleWriteModbus = async (key, value) => {
    setSettings(prevSettings => ({ ...prevSettings, [key]: value }));

    try {
      const response = await axiosInstance.post('/devices/writeModbus', { address: key, value: value });
      // console.log('response.data: ', response.data);
      response.data.isError === false ? toast.info('제어 성공') : toast.error('제어 실패');
    } catch (error) {
      toast.error('제어 실패');
      console.error('Error updating:', error);
    }
  };

  return { settings, handleWriteModbus };
};

export default useHandleSave;
