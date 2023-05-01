import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BlogItem } from "types";

interface FavoritesState {
  favorites: BlogItem[];
}

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorite: (state, { payload }: PayloadAction<BlogItem>) => {
      const favoritesPost = state.favorites.find((favorite) => favorite.id === payload.id);
      !favoritesPost && state.favorites.push(payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },

    removeFavorite: (state, { payload }: PayloadAction<BlogItem>) => {
      state.favorites = state.favorites.filter((favorite) => favorite.id !== payload.id);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export default favoritesSlice.reducer;

export const { setFavorite, removeFavorite } = favoritesSlice.actions;
