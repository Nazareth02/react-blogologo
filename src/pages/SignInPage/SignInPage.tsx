import { SignInForm } from "components";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "routes";
import { HomeRoute, PageLabel, StyledSignInPage } from "./styles";

export const SignInPage = memo(() => {
  return (
    <StyledSignInPage
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{
        type: "tween",
        stiffness: 300,
        damping: 15,
      }}
    >
      <HomeRoute to={ROUTES.HOME}>Back home</HomeRoute>
      <PageLabel>Sign In</PageLabel>
      <SignInForm />
    </StyledSignInPage>
  );
});
