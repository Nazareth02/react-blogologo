import { ContentPage } from "../pages/ContentPage";
import { SignInPage } from "../pages/SignInPage";
import { SignUpPage } from "../pages/SignUpPage";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { FavoritesPage } from "../pages/FavoritesPage";
import { Homepage } from "../pages/Homepage";
import { SearchPage } from "../pages/SearchPage";
import { MainTemplate } from "../templates/MainTemplate";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainTemplate />}>
      <Route index element={<Homepage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="content" element={<ContentPage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="sign-up" element={<SignUpPage />} />
    </Route>
  )
);
