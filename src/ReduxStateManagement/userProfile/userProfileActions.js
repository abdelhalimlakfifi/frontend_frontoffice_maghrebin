// userProfileActions.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const updatePassword = createAsyncThunk(
    'userProfile/updatePassword',
    async ({ currentPassword, newPassword }, { rejectWithValue }) => {
      try {
        // Send a request to the backend to update the password
        const response = await axios.put('http://localhost:3000/api/updatePassword', {
          currentPassword,
          newPassword,
        });
  
        const data = await response.data;
  
        return { status: response.status, data };
      } catch (error) {
        return rejectWithValue({
          data: error.response.data,
          status: error.response.status,
        });
      }
    }
  );

// Define the user profile slice
const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(updatePassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(updatePassword.fulfilled, (state) => {
      state.loading = false;
      // Handle success if needed
    })
    .addCase(updatePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default userProfileSlice.reducer;
