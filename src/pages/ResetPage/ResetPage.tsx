import { memo } from "react";
import { GoHomeLink, PageSpan, StyledResetPage } from "./styles";
import { ROUTES } from "routes";
import { ResetForm } from "components";

export const ResetPage = memo(() => {
  return (
    <StyledResetPage
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{
        type: "tween",
        stiffness: 300,
        damping: 15,
      }}
    >
      <GoHomeLink to={ROUTES.HOME + ROUTES.SIGN_IN}>Go back</GoHomeLink>
      <PageSpan>Reset password</PageSpan>
      <ResetForm />
    </StyledResetPage>
  );
});
