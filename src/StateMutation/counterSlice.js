import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 5; // increment by 5 instead of 1
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;