import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}:8006/api/v1/link/reset`,
        { email },
        {
          headers: {
            "Content-Type": "application/json"
          },
          auth: {
            username: process.env.REACT_APP_API_USERNAME,
            password: process.env.REACT_APP_API_PASSWORD
          }
        }
      );
      const userDetailsResponse = await axios.get(
        `${process.env.REACT_APP_API}:8001/api/users/v1/${email}`,
        {
          headers: {
            "Content-Type": "application/json"
          },
          auth: {
            username: process.env.REACT_APP_API_USERNAME,
            password: process.env.REACT_APP_API_PASSWORD
          }
        }
      );
      const userDetails = userDetailsResponse.data;
      const userRole = userDetails?.data?.role;
      if (userRole !== "seeker") {
        return rejectWithValue("Email atau Password tidak tersedia");
      }

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
