import { createSlice } from "@reduxjs/toolkit"

const userSlice  = createSlice({
    name:"user",
    initialState : {
        userName:"",
        department:''
    },
    reducers:{
        addUserName:(state,action)=>{
           state.userName =  action.payload
        },
        addDepartment:(state,action) => {
            state.department = action.payload
        }
    }
})

export default userSlice.reducer;
export const {addUserName , addDepartment} = userSlice.actions