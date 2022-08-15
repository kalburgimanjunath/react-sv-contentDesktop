import { createSlice } from '@reduxjs/toolkit';

import { data } from '../../data/data.js';

const initialState = { contents: data };

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = contentSlice.actions;
export default contentSlice.reducer;
