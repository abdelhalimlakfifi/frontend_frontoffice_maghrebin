import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    // Make API request to login
    const response = await axios.post("/api/login", { email, password});

    // Dispatch success action
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: response.data, // You might want to store user data in the state
    });
  } catch (error) {
    // Dispatch error action
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.message,
    });
  }
};

