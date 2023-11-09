import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../../helpers/helpers";

export const fetchUserDetails = createAsyncThunk(
  "auth/userDetails",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken() || "placeholder-token";

      const { data } = await axios.get(
        `${process.env.REACT_APP_API}:8001/api/users/v1/auth`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
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
