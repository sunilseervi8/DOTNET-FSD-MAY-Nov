import { createAsyncThunk } from "@reduxjs/toolkit"
import { addNewUser,login } from "../../Services/user.service"; 


// create a thunk to add a new user

export const addUser = createAsyncThunk("user/addUser", async (user) => {
    return await addNewUser(user);
   
})


// create a thunk to validate the user

export const validateUser = createAsyncThunk("user/validateUser",  async (user, { rejectWithValue }) => {
    const response = await login(user);
    console.log(response,response.data)
    return  response.data;
})

