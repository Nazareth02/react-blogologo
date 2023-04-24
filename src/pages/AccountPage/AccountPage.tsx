import React, { memo } from "react";
import { getUser, useAppSelector } from "store";
import {
  CreationInfo,
  EmailInfo,
  FavoritesLink,
  NameInfo,
  NotSignedInfo,
  StyledAccountPage,
  UserInfoGroup,
} from "./styles";
import { ROUTES } from "routes";

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
      {isAuth ? (
        <UserInfoGroup>
          <NameInfo>
            Hello, {name?.charAt(0).toUpperCase()}
            {name?.slice(1)}!
          </NameInfo>
          <EmailInfo>Your email:{email} </EmailInfo>
          <CreationInfo>Creation time:{creationTime}</CreationInfo>
          <FavoritesLink to={ROUTES.HOME + ROUTES.FAVORITES}>Go to favorites</FavoritesLink>
        </UserInfoGroup>
      ) : (
        <NotSignedInfo>Please, sign in</NotSignedInfo>
      )}
    </StyledAccountPage>
  );
});
