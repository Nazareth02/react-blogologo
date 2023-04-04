import { LogoIcon } from "assets";
import { Link } from "react-router-dom";
import { Nav, BurgerMenuNav } from "components";
import { StyledHeader } from "./styles";
import { ROUTES } from "routes";
import { memo } from "react";

export const Header = memo(() => {
  const isMobile = false;
  return (
    <StyledHeader>
      <Link to={ROUTES.HOME}>
        <LogoIcon />
      </Link>
      {isMobile ? <BurgerMenuNav></BurgerMenuNav> : <Nav />}
    </StyledHeader>
  );
});
