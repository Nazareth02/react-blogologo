import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./features/blogsSlice/blogsSlice";
import blogItemSlice from "./features/blogItemSlice/blogItemSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blogItem: blogItemSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
