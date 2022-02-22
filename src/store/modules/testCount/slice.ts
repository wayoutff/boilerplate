import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICounter {
  testCounter: number,
  loading: boolean,
  error: any
}

const initialCounterState = {
  loading: false,
  testCounter: 0
} as ICounter;

const testCounterSlice = createSlice({
  name: 'testCounter',
  initialState: initialCounterState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.testCounter += action.payload;
    },
    decrement(state, action: PayloadAction<number>) {
      state.testCounter -= action.payload;
    },
    fetchIncrement(state, action: PayloadAction<number>) {
      state.loading = true;
    },
    fetchIncrementSuccess(state, action: PayloadAction<number>) {
      state.testCounter = action.payload;
      state.loading = false;
    },
    fetchIncrementFail(state, action: PayloadAction<number>) {
      state.error = action.payload;
      state.loading = true;
    }
  }
});

export const { actions, reducer } = testCounterSlice;
