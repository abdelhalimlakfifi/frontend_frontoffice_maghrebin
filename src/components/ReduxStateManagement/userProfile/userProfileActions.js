// userProfileActions.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for updating user profile
export const updateProfile = createAsyncThunk('/user-profile', async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.put('http://localhost:3000/api/update-profile', userData); // Replace with your backend endpoint
    const data = await response.data;
    return { status: response.status, data };
  } catch (error) {
    return rejectWithValue({ data: error.response.data, status: error.response.status });
  }
});

// Define the user profile slice
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.loading = false;
        // You can handle the successful update if needed
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userProfileSlice.reducer;
