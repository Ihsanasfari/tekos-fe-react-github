import { createSlice } from "@reduxjs/toolkit";
import { getKontrakanById } from "../../actions/kontrakan/kontrakanAction";

const initialState = {
  kontrakanByIdLoading: false,
  kontrakanById: null,
  kontrakanByIdError: null,
  kontrakanByIdSuccess: false
};

const kontrakanByIdSlice = createSlice({
  name: "kontrakanByID",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getKontrakanById.pending, (state) => {
        state.kontrakanByIdLoading = true;
        state.kontrakanByIdError = null;
      })
      .addCase(getKontrakanById.fulfilled, (state, { payload }) => {
        state.kontrakanByIdLoading = false;
        state.kontrakanById = payload;
      })
      .addCase(getKontrakanById.rejected, (state, { payload }) => {
        state.kontrakanByIdLoading = false;
        state.kontrakanByIdError = payload;
      });
  }
});

export default kontrakanByIdSlice.reducer;
