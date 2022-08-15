import { createSlice, createAction } from '@reduxjs/toolkit';
import { combineReducers, rootReducer } from 'redux';
import { cententReducer } from './reducers/contentSlice';

import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
  reducer: {
    content: cententReducer,
  },
});
