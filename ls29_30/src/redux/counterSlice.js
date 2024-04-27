
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 2,
  },
  reducers: {
    multiply: state => {
      state.value *= 2;
    },
    divide: state => {
      state.value /= 2;
    },
  },
});

export const { multiply, divide } = counterSlice.actions;

export default counterSlice.reducer;