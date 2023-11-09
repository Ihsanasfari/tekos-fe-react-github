import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllKontrakan = createAsyncThunk(
  "get/AllKontrakan",
  async (filter = "", { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}:8007/api/v1/kontrakan/searchAdvance?${filter}`,
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

export const getKontrakanById = createAsyncThunk(
  "get/kontrakanById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}:8007/api/v1/kontrakan/${id}`,
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
