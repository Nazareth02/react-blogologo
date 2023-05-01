import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./features/blogsSlice/blogsSlice";
import blogItemReducer from "./features/blogItemSlice/blogItemSlice";
import userReducer from "./features/userSlice/userSlice";
import favoritesReducer from "./features/favoritesSlice/favoritesSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blogItem: blogItemReducer,
    user: userReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
