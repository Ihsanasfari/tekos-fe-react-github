import { createSlice } from "@reduxjs/toolkit";
import { userRegistration } from "../../actions/auth/authAction";

// Rest of the code...
const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false
};

const userRegistrationSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userRegistration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userRegistration.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.success = true;
      })
      .addCase(userRegistration.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  }
});

export default userRegistrationSlice.reducer;
