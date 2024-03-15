import { createSlice } from "@reduxjs/toolkit";


const  coordianteSlice = createSlice({
    name:"coordintaes",
    initialState:'null',
    reducers:{
        addCoordinates : (state,action) => {
            return action.payload
        }
    }
})

export default coordianteSlice.reducer;
export const {addCoordinates}  = coordianteSlice.actions