// store.js
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./auth/authReducer";
import userProfileReducer from "./userProfile/userProfileActions";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userProfile: userProfileReducer
  },
  middleware: [thunk],
});

export default store;
