import { configureStore } from "@reduxjs/toolkit";
import coordinateReducer from './coordinateSlice';
import userReducer from './userSlice';
const store = configureStore({
    reducer:{
        coordinates : coordinateReducer,
        user:userReducer
    },
    devTools:true
})

export default store;
