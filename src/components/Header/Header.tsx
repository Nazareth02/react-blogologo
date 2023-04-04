import { LogoIcon } from "assets";
import { Link } from "react-router-dom";
import { Nav, BurgerMenuNav } from "components";
import { StyledHeader } from "./styles";
import { ROUTES } from "routes";

export const Header = () => {
  const isMobile = false;
  return (
    <StyledHeader>
      <Link to={ROUTES.HOME}>
        <LogoIcon />
      </Link>
      {isMobile ? <BurgerMenuNav></BurgerMenuNav> : <Nav />}
    </StyledHeader>
  );
};
