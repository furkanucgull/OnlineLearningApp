import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';

interface LoginPayload {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  role: string;
}

interface CounterState {
  isAdmin: boolean;
  isLoggedIn: boolean;
  email: string;
  password: string;
  data: AuthResponse | null;
}

const role = localStorage.getItem('role');
//console.log(role, 'rolümüz');
const initialState: CounterState = {
  isLoggedIn: !!localStorage.getItem('token'),
  isAdmin: role == 'Admin',
  email: '',
  password: '',
  data: null,
};
export const getLogin = createAsyncThunk<AuthResponse, LoginPayload>('auth/getLogin', async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/Login`, payload);
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('role', response.data.role);
  //console.log(response.data);
  // console.log('role', response.data.role);
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
      if (action.payload.role === 'Admin') {
        state.isAdmin = true;
      } else {
        state.isAdmin = false;
      }

      state.isLoggedIn = true;
    });
    builder.addCase(getLogin.rejected, (state) => {
      state.isLoggedIn = false;
    });
  },
});

export const { setLogin, setPassword, setEmail } = counterSlice.actions;

export default counterSlice.reducer;
