import { Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "routes";

export const RequireAuth = () => {
  const isAuth = true;
  return isAuth ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />;
};
