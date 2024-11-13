import { createSlice } from "@reduxjs/toolkit";
import { validateUser } from "./userThunk";

const initialState={
    isLoggedIn:false,
    isloggedInStatus:""
}

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        logout:(state)=>{
            isLoggedIn=false
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(validateUser.fulfilled,(state)=>{
            console.log("fullfilled")
            this.isloggedInStatus='success'
            isLoggedIn:true
        })
        builder.addCase(validateUser.pending,(state)=>{
            console.log("pending")
            isloggedInStatus:'pending'
        })
        builder.addCase(validateUser.rejected,(state)=>{
            console.log('rejected')
            isloggedInStatus:'rejected'
        })
    }

})


export const {logout}=userSlice.actions;
export default userSlice.reducer;
