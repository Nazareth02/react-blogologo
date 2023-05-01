import { ErrorMessage, SignInForm } from "components";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "routes";
import { BackToAccount, HomeRoute, PageLabel, StyledSignInPage } from "./styles";
import { getUser, useAppSelector } from "store";

export const SignInPage = memo(() => {
  const { isAuth } = useAppSelector(getUser);

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
      {isAuth ? (
        <>
          <BackToAccount to={ROUTES.HOME + ROUTES.FAVORITES}>Back to favorites </BackToAccount>
          <ErrorMessage message={"Oops, something went wrong!"}></ErrorMessage>
        </>
      ) : (
        <>
          <HomeRoute to={ROUTES.HOME}>Back home</HomeRoute>
          <PageLabel>Sign In</PageLabel>
          <SignInForm />
        </>
      )}
    </StyledSignInPage>
  );
});
