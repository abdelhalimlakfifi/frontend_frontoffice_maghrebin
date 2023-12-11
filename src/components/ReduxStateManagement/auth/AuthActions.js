// authActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3000/api/customer";
export const loginUser = createAsyncThunk(
  "/login",
  async (userCredentials, { rejectWithValue }) => {
    try {
      //   console.log("userCredentials ", userCredentials.email ," ",userCredentials.password);

      const response = await axios.post(`${URL}/login`, userCredentials);

      localStorage.setItem("user", JSON.stringify(response.data.token));
      return {
        status: response.status,
        response,
      };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

// export const signupUser = createAsyncThunk(
//   "/sign-up",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${URL}/customer/customer`, userData);
//       localStorage.setItem("user", JSON.stringify(response.data));
//       return {
//         status: response.status,
//         response,
//       };
//     } catch (error) {
//       return rejectWithValue({
//         data: error.response.data,
//         status: error.response.status,
//       });
//     }
//   }
// );
