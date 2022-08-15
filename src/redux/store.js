import { createSlice, createAction } from '@reduxjs/toolkit';
import { createStore, combineReducers, rootReducer } from 'redux';
import contentReducer from './reducers/contentSlice';
// const reducer = combineReducers({
//   content: content.reducer,
// });
const reducer = combineReducers({
  content: contentReducer,
});
export const store = createStore(reducer);
