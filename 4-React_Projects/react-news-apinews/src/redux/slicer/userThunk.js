import {addUser,validateUser} from "../../service/user.service"
import { createAsyncThunk } from "@reduxjs/toolkit";

//  const userThunk
export const userThunk = createAsyncThunk("user/userThunk", async (data) =>{
  const response =await addUser(data);
  console.log("thunk data",data);
  return response.data;
})

export const validateUser=createAsyncThunk("user/validateUser", async (data) =>{
  const response =await validateUser(data);
  console.log("thunk data",data);
  return response.data;
})