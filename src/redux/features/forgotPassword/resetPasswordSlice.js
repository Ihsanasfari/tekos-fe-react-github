import { createSlice } from "@reduxjs/toolkit";
import { resetPassword } from "../../actions/forgotPassword/resetPasswordAction";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false
};

const forgotPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.success = true;
      })
      .addCase(resetPassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  }
});

export default forgotPasswordSlice.reducer;
