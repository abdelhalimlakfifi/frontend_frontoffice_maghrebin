// store.js
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./auth/authActions";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [thunk],
});

export default store;
