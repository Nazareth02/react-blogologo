import { memo } from "react";
import { getUser, useAppSelector } from "store";
import {
  BackHomeLink,
  CreationInfo,
  EmailInfo,
  FavoritesLink,
  LogOutBtn,
  NameInfo,
  NavBtnGroup,
  NotSignedInfo,
  StyledAccountPage,
  UserInfoGroup,
} from "./styles";
import { ROUTES } from "routes";
import dateFormat from "dateformat";
import { LogOutIcon } from "assets";

export const AccountPage = memo(() => {
  const { isAuth, email, creationTime, name } = useAppSelector(getUser);

  return (
    <StyledAccountPage
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{
        type: "tween",
        stiffness: 300,
        damping: 15,
      }}
    >
      <NavBtnGroup>
        <BackHomeLink to={ROUTES.HOME}>Back home</BackHomeLink>
        <LogOutBtn>
          Log out <LogOutIcon />
        </LogOutBtn>
      </NavBtnGroup>

      {isAuth ? (
        <UserInfoGroup>
          <NameInfo>
            Hello, {name?.charAt(0).toUpperCase()}
            {name?.slice(1)}!
          </NameInfo>
          <EmailInfo>Your email: {email}</EmailInfo>
          <CreationInfo>
            Account created: {dateFormat(creationTime ? "mmmm dS, dddd, yyyy, h:MM:ss TT" : "No info")}
          </CreationInfo>
          <FavoritesLink to={ROUTES.HOME + ROUTES.FAVORITES}>Go to favorites</FavoritesLink>
        </UserInfoGroup>
      ) : (
        <NotSignedInfo>Please, sign in</NotSignedInfo>
      )}
    </StyledAccountPage>
  );
});
