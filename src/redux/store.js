'use client';
import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './features/testSlice';

const store = configureStore({
   reducer: {
      countries: countrySlice,
   },
});

export default store;
