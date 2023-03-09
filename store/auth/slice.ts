import { createSlice } from '@reduxjs/toolkit';

import { AuthState } from './types';
import { login } from './api';

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
  },
});

export default authSlice.reducer;
