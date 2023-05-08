import { configureStore } from '@reduxjs/toolkit';
import auth from './auth/slice';
import orders from './orders/slice';

export const store = configureStore({
  reducer: {
    auth,
    orders,
  },
});

export const getStore = () => store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
