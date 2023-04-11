import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { BlogItem } from "types";

interface BlogsState {
  articles: BlogItem[];
  news: BlogItem[];
  isLoading: boolean;
  error: string | null;
}

export const fetchArticles = createAsyncThunk<
  BlogItem[],
  { value: string; text: string; _limit: number },
  { rejectValue: string }
>("articles/fetchArticles", async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=${params._limit}&_sort=${params.value}`,
    );

    return data;
  } catch (error) {
    const { message } = error as AxiosError;

    return rejectWithValue(message);
  }
});

export const fetchNews = createAsyncThunk<
  BlogItem[],
  { value: string; text: string; _limit: number },
  { rejectValue: string }
>("news/fetchNews", async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://api.spaceflightnewsapi.net/v3/blogs?_limit=${params._limit}&_sort=${params.value}`,
    );

    return data;
  } catch (error) {
    const { message } = error as AxiosError;

    return rejectWithValue(message);
  }
});

const initialState: BlogsState = {
  isLoading: false,
  error: null,
  articles: [],
  news: [],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
    });

    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.news = payload;
    });
    builder.addCase(fetchNews.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
    });
  },
});

export default blogsSlice.reducer;
