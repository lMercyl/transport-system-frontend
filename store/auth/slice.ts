import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from './types';
import { checkAuth, login, signup, getInfoUser } from './api';

const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isAuthenticated = false;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = 'Error auth login';
    });
    builder.addCase(signup.pending, (state) => {
      state.isAuthenticated = false;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signup.fulfilled, (state) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(signup.rejected, (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = 'Error auth signup';
    });
    builder.addCase(checkAuth.pending, (state) => {
      state.isAuthenticated = true;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(checkAuth.fulfilled, (state) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(checkAuth.rejected, (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = 'Error auth checkAuth';
    });
    builder.addCase(getInfoUser.pending, (state) => {
      state.isAuthenticated = true;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getInfoUser.fulfilled, (state) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getInfoUser.rejected, (state) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = 'Error auth getInfoUser';
    });
  },
});

export default authSlice.reducer;
