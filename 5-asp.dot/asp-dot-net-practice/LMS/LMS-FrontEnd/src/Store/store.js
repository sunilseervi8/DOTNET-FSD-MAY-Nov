import { configureStore } from "@reduxjs/toolkit";
import  UserReducer from './slicer/userSlicer'


const store = configureStore({
  reducer: {
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),


})

export default store
