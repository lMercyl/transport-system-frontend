import axios from 'axios';
import Cookies from 'js-cookie';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginData, SignupData } from './types';

const TOKEN_COOKIE_NAME = 'jwt';

const URL_API = 'http://localhost:7777';

export const login = createAsyncThunk('auth/login', async (payload: LoginData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`${URL_API}/auth/login`, payload);
    const { token } = data;
    Cookies.set(TOKEN_COOKIE_NAME, token);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const signup = createAsyncThunk('auth/signup', async (payload: SignupData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`${URL_API}/auth/registration`, payload);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async ({}, { rejectWithValue }) => {
  try {
    await axios.get(`${URL_API}/auth/logout`);
    Cookies.remove(TOKEN_COOKIE_NAME);
  } catch (error: any) {
    Cookies.remove(TOKEN_COOKIE_NAME);
    return rejectWithValue(error.response.data.message);
  }
});

export const checkAuth = createAsyncThunk('auth/checkAuth', async ({}, { rejectWithValue }) => {
  try {
    await axios.get(`${URL_API}/auth/me`);
  } catch (error: any) {
    Cookies.remove(TOKEN_COOKIE_NAME);
    return rejectWithValue(error.response.data.message);
  }
});

export const getInfoUser = createAsyncThunk('auth/getUserInfo', async ({}, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`${URL_API}/auth/info`);
    console.log(data);
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});
