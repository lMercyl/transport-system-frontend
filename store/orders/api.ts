import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

const URL_API = 'http://localhost:7777';

export const getOrdersById = createAsyncThunk('orders/getOrdersById', async (payload: string, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`${URL_API}/orders/user/${payload}`);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});

interface QueryParamsOrder {
  limit: number;
  page: number;
  userId: number;
}

export const getOrdersByLimitsAndPage = createAsyncThunk(
  'orders/getOrdersByLimitsAndPage',
  async (payload: QueryParamsOrder, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${URL_API}/orders?limit=${payload.limit}&page=${payload.page}&userId=${payload.userId}`,
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);
