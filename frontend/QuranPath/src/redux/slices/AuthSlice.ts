import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';

interface LoginPayload {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

interface CounterState {
  isLoggedIn: boolean;
  email: string;
  password: string;
  data: AuthResponse | null;
}

const initialState: CounterState = {
  isLoggedIn: !!localStorage.getItem('token'),
  email: '',
  password: '',
  data: null,
};

export const getLogin = createAsyncThunk<AuthResponse, LoginPayload>('auth/getLogin', async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/Login`, payload);
  localStorage.setItem('token', response.data.token);
  console.log(response.data);
  return response.data;
});

const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLogin.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(getLogin.rejected, (state) => {
      state.isLoggedIn = false;
    });
  },
});

export const { setLogin, setPassword, setEmail } = counterSlice.actions;

export default counterSlice.reducer;
