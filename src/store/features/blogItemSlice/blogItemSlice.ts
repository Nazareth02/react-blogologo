import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { BlogItem } from "types";

interface BlogsItemState {
  articlesPiece: BlogItem;
  newsPiece: BlogItem;
  isLoading: boolean;
  error: string | null;
}

export const fetchArticlesById = createAsyncThunk<BlogItem, { id: number }, { rejectValue: string }>(
  "articles/fetchArticlesById",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

      return data;
    } catch (error) {
      const { message } = error as AxiosError;

      return rejectWithValue(message);
    }
  },
);

export const fetchNewsById = createAsyncThunk<BlogItem, { id: number }, { rejectValue: string }>(
  "blogs/fetchNewsById",
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`https://api.spaceflightnewsapi.net/v3/blogs/${params.id}`);

      return data;
    } catch (error) {
      const { message } = error as AxiosError;

      return rejectWithValue(message);
    }
  },
);

const initialState: BlogsItemState = {
  isLoading: false,
  error: null,
  articlesPiece: {} as BlogItem,
  newsPiece: {} as BlogItem,
};

const blogsItemSlice = createSlice({
  name: "blogItem",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticlesById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticlesById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articlesPiece = payload;
    });
    builder.addCase(fetchArticlesById.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
    });

    builder.addCase(fetchNewsById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNewsById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.newsPiece = payload;
    });
    builder.addCase(fetchNewsById.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
    });
  },
});

export default blogsItemSlice.reducer;
