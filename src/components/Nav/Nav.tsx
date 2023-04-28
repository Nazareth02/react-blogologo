import { FavoritesActiveIcon, SearchIcon, SingInIcon, UserIcon } from "assets";
import { memo } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "routes";
import {
  AccountSpan,
  FavoritesSpan,
  HomeSpan,
  IconWrapper,
  NotSignedUserInfo,
  SearchSpan,
  StyledLink,
  StyledNav,
} from "./styles";
import { getUser, useAppSelector } from "store";

interface NavProps {
  isOpen: boolean;
  isMobile: boolean;
  handleClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
  idle: {},
};

export const Nav = memo(({ isOpen, isMobile, handleClose }: NavProps) => {
  const { isAuth, name } = useAppSelector(getUser);

  const currentVariant = isMobile ? (isOpen ? "open" : "closed") : "idle";

  return (
    <StyledNav animate={currentVariant} variants={menuVariants} initial="idle">
      {isMobile && (
        <Link to={ROUTES.HOME} onClick={handleClose}>
          <HomeSpan>Home</HomeSpan>
        </Link>
      )}

      <Link to={ROUTES.FAVORITES} onClick={handleClose}>
        {isMobile ? <FavoritesSpan>Favorites</FavoritesSpan> : <FavoritesActiveIcon />}
      </Link>
      <Link to={ROUTES.SEARCH} onClick={handleClose}>
        {isMobile ? <SearchSpan>Search</SearchSpan> : <SearchIcon />}
      </Link>
      {isAuth ? (
        <StyledLink to={ROUTES.ACCOUNT} onClick={handleClose}>
          {isMobile ? (
            <>
              <IconWrapper>
                <UserIcon />
              </IconWrapper>
              <AccountSpan>
                {name?.charAt(0).toUpperCase()}
                {name?.slice(1)}
              </AccountSpan>
            </>
          ) : (
            <>
              <IconWrapper>
                <UserIcon />
              </IconWrapper>
              <AccountSpan>
                {name?.charAt(0).toUpperCase()}
                {name?.slice(1)}
              </AccountSpan>
            </>
          )}
        </StyledLink>
      ) : (
        <StyledLink to={ROUTES.SIGN_IN} onClick={handleClose}>
          <SingInIcon />
          <NotSignedUserInfo>Sign in</NotSignedUserInfo>
        </StyledLink>
      )}
      {/* {isMobile && <ThemeToggleBtn handleClick activeTheme />} */}
    </StyledNav>
  );
});
