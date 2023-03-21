import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import { RequireAuth } from "components";
import {
  HomePage,
  SearchPage,
  ContentPage,
  SignInPage,
  SignUpPage,
  FavoritesPage,
} from "pages";
import { MainTemplate } from "templates/MainTemplate";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTES.SEARCH} element={<SearchPage />} />
      <Route path={ROUTES.CONTENT} element={<ContentPage />} />
      <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
      <Route element={<RequireAuth />}>
        <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
      </Route>
    </Route>
  )
  // { basename: "/react-blogologo" }
);
