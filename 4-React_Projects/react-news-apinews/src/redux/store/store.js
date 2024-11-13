import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "../slicer/userSlicer";

const store =configureStore({
  reducer:{
    user:userSlicer
  },
  middleware:(getDefault)=>{
    getDefault({
        serializableCheck:false,
    })
  }
})

export default store