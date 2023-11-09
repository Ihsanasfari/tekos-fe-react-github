import { createSlice } from "@reduxjs/toolkit";
import { fetchUserDetails } from "../../actions/auth/authAction";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false
};
const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.success = true;
      })
      .addCase(fetchUserDetails.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  }
});

export default userDetailsSlice.reducer;
