import { configureStore } from '@reduxjs/toolkit';
import auth from './auth/slice';

export const store = configureStore({
  reducer: {
    auth,
  },
});

export const getStore = () => store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
