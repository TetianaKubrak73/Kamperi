import { createSlice } from "@reduxjs/toolkit";
import { fetchCamper } from "./operation";

const camperSlice = createSlice({
  name: "camper",
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamper.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCamper.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.items = payload;
      })
      .addCase(fetchCamper.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export default camperSlice.reducer;
