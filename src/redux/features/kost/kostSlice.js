import { createSlice } from "@reduxjs/toolkit";
import { getAllKosts } from "../../actions/kost/kostAction";

const initialState = {
  kostsLoading: false,
  kosts: null,
  kostsError: null,
  kostsSuccess: false
};

const kostslice = createSlice({
  name: "kosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllKosts.pending, (state) => {
        state.kostsLoading = true;
        state.kostsError = null;
      })
      .addCase(getAllKosts.fulfilled, (state, { payload }) => {
        state.kostsLoading = false;
        state.kosts = payload;
      })
      .addCase(getAllKosts.rejected, (state, { payload }) => {
        state.kostsLoading = false;
        state.kostsError = payload;
      });
  }
});

export default kostslice.reducer;
