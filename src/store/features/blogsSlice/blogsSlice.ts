import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface BlogsState {
  articles: any[];
  isLoading: boolean;
  error: string | null;
}

export const fetchAllArticles = createAsyncThunk("articles/fetchArticles", async () => {
  const { data } = await axios.get("https://api.spaceflightnewsapi.net/v4/articles/");
  return data;
});

const initialState: BlogsState = {
  isLoading: false,
  error: null,
  articles: [],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllArticles.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles.push(payload);
    });
    builder.addCase(fetchAllArticles.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export default blogsSlice.reducer;
