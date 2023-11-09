import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllNearby = createAsyncThunk(
  "get/AllNearby",
  async (filter = "", { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}:8008/api/v1/nearby/searchAdvance?${filter}`,
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

export const getNearbyById = createAsyncThunk(
  "get/nearbyById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}:8008/api/v1/nearby/${id}`,
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
