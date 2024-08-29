import { createSlice } from "@reduxjs/toolkit"
import { updateDeviceData, editableValueOnSave } from "./thunkFunction";
import { toast } from "react-toastify";

const initialState = {
    graphData: [],
    // graphData: [{
    //     x: Date.now(),
    //     y: Math.random(),
    // }],
    deviceAllData: [],
    //ex){
    //    description: '디퓨저 모드',
    //    value: 3
    //}
    dashBoardGraphData: [],
    isAuth: false,
    isLoading: false,
    error: ''
}

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateDeviceData.pending, (state, action) => {
                state.isLoading = true;
                //state.deviceAllData = action.payload;
                //state.dashBoardGraphData = [...state.dashBoardGraphData, {x: Date.now(), y: action.payload.deviceDataArray}]
                //state.dashBoardGraphData.length > 100 ? state.dashBoardGraphData = [...state.dashBoardGraphData.slice(30)] : null;
            })
            .addCase(updateDeviceData.fulfilled, (state, action) =>{
                state.isLoading = false;
                state.deviceAllData = JSON.parse(action.payload);
                //console.log('state.deviceAllData', state.deviceAllData)
                state.graphData = [...state.graphData, {x: Date.now(), y: JSON.parse(action.payload)}]
                state.graphData.length > 100 ? state.graphData = [...state.dashBoardGraphData.slice(10)] : null;
            })
            .addCase(updateDeviceData.rejected, (state, action) => {
                state.isLoading = false;
            })
            .addCase(editableValueOnSave.pending, (state, action) => {
                state.isLoading = true;
                //state.deviceAllData = action.payload;
                //state.dashBoardGraphData = [...state.dashBoardGraphData, {x: Date.now(), y: action.payload.deviceDataArray}]
                //state.dashBoardGraphData.length > 100 ? state.dashBoardGraphData = [...state.dashBoardGraphData.slice(30)] : null;
            })
            .addCase(editableValueOnSave.fulfilled, (state, action) =>{
                state.isLoading = false;
                console.log('editableValueOnSave action.payload: ',action.payload)
                state.deviceAllData[action.payload.dataKey] = action.payload.inputValue;
                // state.deviceAllData = JSON.parse(action.payload);
                // //console.log('state.deviceAllData', state.deviceAllData)
                // state.graphData = [...state.graphData, {x: Date.now(), y: JSON.parse(action.payload)}]
                // state.graphData.length > 100 ? state.graphData = [...state.dashBoardGraphData.slice(10)] : null;
            })
            .addCase(editableValueOnSave.rejected, (state, action) => {
                state.isLoading = false;
            })
    }
})

export default deviceSlice.reducer; //이 리듀서를 다른 파일에서 받아서 스토어를 생성할 것이다.