'use client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWatchData = createAsyncThunk('watches/fetchWatchData', async () => {
   const response = await axios.get('https://restcountries.com/v3.1/all');
   return response.data;
});

const initialState = {
   countries: [],
   isLoading: false,
};

const countrySlice = createSlice({
   name: 'counter',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchWatchData.fulfilled, (state, action) => {
         // Add user to the state array
         state.countries = action.payload;
      });
   },
});

export default countrySlice.reducer;
