import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;