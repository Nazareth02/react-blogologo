import { memo } from "react";
import { getUser, useAppSelector } from "store";
import {
  BackHomeLink,
  BoldInfo,
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
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const AccountPage = memo(() => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  // Method to sign out the current user
  const handleSignOut = async () => {
    await auth.signOut();
    navigate(ROUTES.HOME);
  };

  const { isAuth, email, creationTime } = useAppSelector(getUser);

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
        {isAuth && (
          <LogOutBtn onClick={handleSignOut}>
            Log out <LogOutIcon />
          </LogOutBtn>
        )}
      </NavBtnGroup>

      {isAuth ? (
        <UserInfoGroup>
          <NameInfo>
            Hello, {user?.displayName?.charAt(0).toUpperCase()}
            {user?.displayName?.slice(1)}! 👋
          </NameInfo>
          <EmailInfo>
            Your email: <BoldInfo>{email}</BoldInfo>
          </EmailInfo>
          <CreationInfo>
            Last sing-in time:
            <BoldInfo>
              {" "}
              {dateFormat(user?.metadata.lastSignInTime ? "mmmm dS, dddd, yyyy, h:MM:ss TT" : "No info")}
            </BoldInfo>
          </CreationInfo>
          <FavoritesLink to={ROUTES.HOME + ROUTES.FAVORITES}>Go to favorites</FavoritesLink>
        </UserInfoGroup>
      ) : (
        <NotSignedInfo>Please, sign in</NotSignedInfo>
      )}
    </StyledAccountPage>
  );
});
