import { memo } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "routes";

export const RequireAuth = memo(() => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />;
});
