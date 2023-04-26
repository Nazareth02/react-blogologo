import { fetchArticlesById, fetchNewsById } from "./features/blogItemSlice/blogItemSlice";
import { fetchArticles, fetchNews } from "./features/blogsSlice/blogsSlice";
import {
  fetchResetUser,
  fetchSignInUser,
  fetchSignUpUser,
  logOut,
  resetError,
  setAuth,
  updateUserName,
} from "./features/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { getBlogById } from "./selectors/blogItemSelector";
import { getAllArticles } from "./selectors/blogsSelector";
import { getUser } from "./selectors/userSelector";
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
  fetchSignUpUser,
  getUser,
  fetchSignInUser,
  updateUserName,
  setAuth,
  logOut,
  fetchResetUser,
  resetError,
};
