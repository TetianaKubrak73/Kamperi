import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.favorites.some((item) => item.name === action.payload.name)) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.name !== action.payload.name
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
