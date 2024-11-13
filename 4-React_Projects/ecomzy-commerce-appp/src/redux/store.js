import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';

// Create the persist configuration for the cart slice
const persistConfig = {
  key: 'root', // This key determines where in storage the state is saved
  storage,
};

// Combine reducers (if you have multiple slices)
const rootReducer = combineReducers({
  cart: cartSlice,
});

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;
