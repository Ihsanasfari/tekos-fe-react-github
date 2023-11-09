import { createSlice } from "@reduxjs/toolkit";
import { getKostById } from "../../actions/kost/kostAction";

const initialState = {
  kostByIdLoading: false,
  kostById: null,
  kostByIdError: null,
  kostByIdSuccess: false
};

const kostByIdSlice = createSlice({
  name: "kostByID",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getKostById.pending, (state) => {
        state.kostByIdLoading = true;
        state.kostByIdError = null;
      })
      .addCase(getKostById.fulfilled, (state, { payload }) => {
        state.kostByIdLoading = false;
        state.kostById = payload;
      })
      .addCase(getKostById.rejected, (state, { payload }) => {
        state.kostByIdLoading = false;
        state.kostByIdError = payload;
      });
  }
});

export default kostByIdSlice.reducer;
