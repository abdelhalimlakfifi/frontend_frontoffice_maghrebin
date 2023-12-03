// authActions.js
import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    '/login',
    async (userCredentials, {
        rejectWithValue
    }) => {
        try {
            const response = await axios.post('api/login', userCredentials);
            localStorage.setItem('user', JSON.stringify(response.data));
            return {
                status: response.status,
                response
            };
        } catch (error) {
            return rejectWithValue({
                data: error.response.data,
                status: error.response.status
            });
        }
    }
);


export const signupUser = createAsyncThunk(
    '/sign-up',
    async (userData, {
        rejectWithValue
    }) => {
        try {
            const response = await axios.post('api/sign-up', userData);
            localStorage.setItem('user', JSON.stringify(response.data));
            return {
                status: response.status,
                response
            };
        } catch (error) {
            return rejectWithValue({
                data: error.response.data,
                status: error.response.status
            });
        }
    }
);