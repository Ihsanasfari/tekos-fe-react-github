import { createSlice } from "@reduxjs/toolkit";
import { getNearbyById } from "../../actions/nearby/nearbyAction";

const initialState = {
  nearbyByIdLoading: false,
  nearbyById: null,
  nearbyByIdError: null,
  nearbyByIdSuccess: false
};

const nearbyByIdSlice = createSlice({
  name: "nearby",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNearbyById.pending, (state) => {
        state.nearbyByIdLoading = true;
        state.nearbyByIdError = null;
      })
      .addCase(getNearbyById.fulfilled, (state, { payload }) => {
        state.nearbyByIdLoading = false;
        state.nearbyById = payload;
      })
      .addCase(getNearbyById.rejected, (state, { payload }) => {
        state.nearbyByIdLoading = false;
        state.nearbyByIdError = payload;
      });
  }
});

export default nearbyByIdSlice.reducer;
