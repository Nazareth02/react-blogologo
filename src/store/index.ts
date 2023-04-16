import { fetchArticlesById, fetchNewsById } from "./features/blogItemSlice/blogItemSlice";
import { fetchArticles, fetchNews } from "./features/blogsSlice/blogsSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { getBlogById } from "./selectors/blogItemSelector";
import { getAllArticles } from "./selectors/blogsSelector";
import { store } from "./store";

export {
  store,
  fetchArticles,
  fetchNews,
  getAllArticles,
  useAppDispatch,
  useAppSelector,
  getBlogById,
  fetchNewsById,
  fetchArticlesById,
};
