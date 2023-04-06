import { fetchArticles } from "./features/blogsSlice/blogsSlice";
import { useAppDispatch } from "./hooks/hooks";
import { getAllArticles } from "./selectors/blogsSelector";
import { store } from "./store";
export { store, fetchArticles, getAllArticles, useAppDispatch };
