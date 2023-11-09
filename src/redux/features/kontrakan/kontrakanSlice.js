import { createSlice } from "@reduxjs/toolkit";
import { getAllKontrakan } from "../../actions/kontrakan/kontrakanAction";

const initialState = {
  kontrakanLoading: false,
  kontrakan: null,
  kontrakanError: null,
  kontrakanSuccess: false
};

const kontrakanSlice = createSlice({
  name: "kontrakan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllKontrakan.pending, (state) => {
        state.kontrakanLoading = true;
        state.kontrakanError = null;
      })
      .addCase(getAllKontrakan.fulfilled, (state, { payload }) => {
        state.kontrakanLoading = false;
        state.kontrakan = payload;
      })
      .addCase(getAllKontrakan.rejected, (state, { payload }) => {
        state.kontrakanLoading = false;
        state.kontrakanError = payload;
      });
  }
});

export default kontrakanSlice.reducer;
