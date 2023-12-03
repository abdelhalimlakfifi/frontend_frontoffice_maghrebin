// authActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("auth/login", async ({ email, password }) => {
  try {
    const response = await axios.post("/api/login", { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
