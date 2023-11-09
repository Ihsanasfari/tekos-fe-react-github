import { createSlice } from "@reduxjs/toolkit";
import { getAllNearby } from "../../actions/nearby/nearbyAction";

const initialState = {
  nearbyLoading: false,
  nearby: null,
  nearbyError: null,
  nearbySuccess: false
};

const nearbySlice = createSlice({
  name: "nearby",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNearby.pending, (state) => {
        state.nearbyLoading = true;
        state.nearbyError = null;
      })
      .addCase(getAllNearby.fulfilled, (state, { payload }) => {
        state.nearbyLoading = false;
        state.nearby = payload;
      })
      .addCase(getAllNearby.rejected, (state, { payload }) => {
        state.nearbyLoading = false;
        state.nearbyError = payload;
      });
  }
});

export default nearbySlice.reducer;
