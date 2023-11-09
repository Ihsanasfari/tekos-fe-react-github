import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllKosts = createAsyncThunk(
  "get/Allkosts",
  async (filter = "", { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}:8002/api/v1/kost/searchAdvance?${filter}`,
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

export const getKostById = createAsyncThunk(
  "get/kostById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}:8002/api/v1/kost/${id}`,
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

export const getRoomById = createAsyncThunk(
  "get/roomById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}:8002/api/v1/kost/room/${id}`,
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
