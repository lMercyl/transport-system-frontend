import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { OrdersState, OrderData } from './types';
import { getOrdersById, getOrdersByLimitsAndPage } from './api';

const initialState: OrdersState = {
  items: [],
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrdersById.pending, (state) => {
      state.items = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOrdersById.fulfilled, (state, action: PayloadAction<OrderData[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getOrdersById.rejected, (state) => {
      state.items = [];
      state.loading = false;
      state.error = 'Error get items by userId';
    });
    builder.addCase(getOrdersByLimitsAndPage.pending, (state) => {
      state.items = [];
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOrdersByLimitsAndPage.fulfilled, (state, action: PayloadAction<OrderData[]>) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getOrdersByLimitsAndPage.rejected, (state) => {
      state.items = [];
      state.loading = false;
      state.error = 'Error get items by userId, limit, page';
    });
  },
});

export default ordersSlice.reducer;
