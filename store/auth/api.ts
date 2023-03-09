import axios from 'axios';
import Cookies from 'js-cookie';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginData } from './types';

const TOKEN_COOKIE_NAME = 'my-jwt-token';

export const login = createAsyncThunk('auth/login', async (payload: LoginData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('http://localhost:4545/auth/login', payload);
    const { access_token } = data;
    Cookies.set(TOKEN_COOKIE_NAME, access_token);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});
