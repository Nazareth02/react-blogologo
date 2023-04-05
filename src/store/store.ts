import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "./features/blogsSlice/blogsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
