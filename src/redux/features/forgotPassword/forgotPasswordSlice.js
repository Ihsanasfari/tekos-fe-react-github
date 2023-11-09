import { createSlice } from "@reduxjs/toolkit";
import { forgotPassword } from "../../actions/forgotPassword/forgotPasswordAction";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false
};

const forgotPasswordSlice = createSlice({
  name: "forgotpassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.success = true;
      })
      .addCase(forgotPassword.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  }
});
export default forgotPasswordSlice.reducer;
