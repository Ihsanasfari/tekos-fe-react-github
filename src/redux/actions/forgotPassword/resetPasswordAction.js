import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const resetPassword = createAsyncThunk(
  "resetPassword",
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}:8001/api/users/v1/reset/${token}`,
        { password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          auth: {
            username: process.env.REACT_APP_API_USERNAME,
            password: process.env.REACT_APP_API_PASSWORD,
          },
        }
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
