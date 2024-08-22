import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

export const registerUser = createAsyncThunk(
    "user/registerUser",
    async (body, thunkAPI) => { //payload creator
        try {
            const response = await axiosInstance.post(
                `/users/register`,
                body
            )
            return response.data; //action payload
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
)

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (body, thunkAPI) => { //payload creator
        try {
            const response = await axiosInstance.post(
                `/users/login`,
                body
            )
            return response.data; //action payload
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
)

export const authUser = createAsyncThunk(
    "user/authUser",
    async (_, thunkAPI) => { //payload creator
        try {
            const response = await axiosInstance.get(
                `/users/auth`,
            )
            return response.data; //action payload
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
)

export const logoutUser = createAsyncThunk(
    "user/logoutUser",
    async (_, thunkAPI) => { //payload creator
        try {
            const response = await axiosInstance.post(
                `/users/logout`,
            )
            return response.data; //action payload
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.response.data || error.message);
        }
    }
)



export const requestAllDeviceData = createAsyncThunk(
    "device/requestAllDeviceData",
    async (_, thunkAPI) => { //payload creator
        try {
            const response = await axiosInstance.get(
                `/devices/requestAllDeviceDataAPI`,
            )
            console.log('thunkFunction_requestAllDeviceData: ', response.data);
            return response.data; //action payload
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


export const updateDeviceData = createAsyncThunk(
    "device/updateDeviceData",
    async (data, thunkAPI) => {
      // 웹소켓으로 받은 데이터를 그대로 반환
      return data;
    }
  );