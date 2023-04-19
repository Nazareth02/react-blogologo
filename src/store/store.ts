import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./features/blogsSlice/blogsSlice";
import blogItemReducer from "./features/blogItemSlice/blogItemSlice";
import userReducer from "./features/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blogItem: blogItemReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
