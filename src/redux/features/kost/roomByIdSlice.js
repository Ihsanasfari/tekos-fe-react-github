import { createSlice } from "@reduxjs/toolkit";
import { getRoomById } from "../../actions/kost/kostAction";

const initialState = {
  roomByIdLoading: false,
  roomById: null,
  roomByIdError: null,
  roomByIdSuccess: false
};

const roomByIdSlice = createSlice({
  name: "roomkostByID",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoomById.pending, (state) => {
        state.roomByIdLoading = true;
        state.roomByIdError = null;
      })
      .addCase(getRoomById.fulfilled, (state, { payload }) => {
        state.roomByIdLoading = false;
        state.roomById = payload;
      })
      .addCase(getRoomById.rejected, (state, { payload }) => {
        state.roomByIdLoading = false;
        state.roomByIdError = payload;
      });
  }
});

export default roomByIdSlice.reducer;
