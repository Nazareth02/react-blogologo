import { memo } from "react";
import { HomeRouteLink, PageName, StyledSignUpPage } from "./styles";
import { SignUpForm } from "components";
import { ROUTES } from "routes";

export const SignUpPage = memo(() => {
  return (
    <StyledSignUpPage
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{
        type: "tween",
        stiffness: 300,
        damping: 15,
      }}
    >
      <HomeRouteLink to={ROUTES.HOME}>Back home</HomeRouteLink>
      <PageName>Sign Up</PageName>
      <SignUpForm />
    </StyledSignUpPage>
  );
});
