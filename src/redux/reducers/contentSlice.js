import { createSlice } from '@reduxjs/toolkit';

import { data } from '../../data/data.js';

const initialState = { content: data };

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      // prepare: (text) => {
      //   const id = nanoid();
      //   return { payload: { id, text } };
      // },
    },
  },
});

export const { addTodo } = contentSlice.actions;
export default contentSlice.reducer;
