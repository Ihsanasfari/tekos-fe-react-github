import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCookie, destroyCookie } from "nookies";
import { getToken } from "../../../helpers/helpers";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}:8001/api/users/v1/auth`,
        { email, password },
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
      setCookie(null, "access_token", data?.data);

      const userDetailsResponse = await axios.get(
        `${process.env.REACT_APP_API}:8001/api/users/v1/auth`,
        {
          headers: {
            Authorization: `Bearer ${data?.data}`
          }
        }
      );

      const userDetails = userDetailsResponse.data;
      const userRole = userDetails?.data?.role;

      if (userRole !== "seeker") {
        destroyCookie(null, "access_token");
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

export const fetchUserDetails = createAsyncThunk(
  "auth/userDetails",
  async (_, { rejectWithValue }) => {
    const token = getToken();
    if (!token) {
      return null;
    }
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}:8001/api/users/v1/auth`,
        {
          headers: {
            Authorization: `Bearer ${token}`
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

export const userRegistration = createAsyncThunk(
  "auth/registration",
  async ({ email, password, name, phone }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}:8001/api/users/v1/register`,
        { email, password, name, phone, isAdmin: "false" },
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
