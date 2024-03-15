import { configureStore } from "@reduxjs/toolkit";
import coordinateReducer from './coordinateSlice';
const store = configureStore({
    reducer:{
        coordinates : coordinateReducer
    },
    devTools:true
})

export default store;