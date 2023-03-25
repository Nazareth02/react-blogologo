import { LogoIcon } from "assets";
import { Link } from "react-router-dom";
import { Nav } from "components";
import { StyledHeader } from "./styles";
import { ROUTES } from "routes";
import { BurgerMenuNav } from "components/BurgerMenuNav/BurgerMenuNav";

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
