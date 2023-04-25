import { memo } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "routes";
import { getUser, useAppSelector } from "store";

export const RequireAuth = memo(() => {
  const { isAuth } = useAppSelector(getUser);

  return isAuth ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />;
});
