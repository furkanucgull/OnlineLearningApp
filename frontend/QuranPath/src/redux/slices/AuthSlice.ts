import { createSlice } from '@reduxjs/toolkit';
export interface CounterState {
  isLoggedIn: boolean;
}

const initialState: CounterState = {
  isLoggedIn: localStorage.getItem('token') ? true : false,
};

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLogin } = counterSlice.actions;

export default counterSlice.reducer;
