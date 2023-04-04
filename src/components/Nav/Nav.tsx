import { FavoritesActiveIcon, SearchIcon, SingInIcon, SingUpIcon } from "assets";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";
import { Color } from "ui";
import { SignUserInfo, StyledLink, StyledNav } from "./styles";

export const Nav = () => {
  const isAuth = false;
  return (
    <StyledNav>
      <Link to={ROUTES.FAVORITES}>
        <FavoritesActiveIcon />
      </Link>
      <Link to={ROUTES.SEARCH}>
        <SearchIcon />
      </Link>
      {isAuth ? (
        <StyledLink to={ROUTES.ACCOUNT}>
          <SingUpIcon />
          <SignUserInfo>Username</SignUserInfo>
        </StyledLink>
      ) : (
        <StyledLink to={ROUTES.SIGN_IN}>
          <SingInIcon />
          <SignUserInfo>Sign in</SignUserInfo>
        </StyledLink>
      )}
    </StyledNav>
  );
};
