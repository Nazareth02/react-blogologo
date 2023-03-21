import { FavoritesActiveIcon, Logo } from "assets";
import { Link } from "react-router-dom";
import { Nav } from "components";
import { StyledHeader } from "./styles";
import { ROUTES } from "routes";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUTES.HOME}>
        <Logo />
      </Link>
      <Link to={ROUTES.FAVORITES}>
        <FavoritesActiveIcon />
      </Link>
      <Nav />
    </StyledHeader>
  );
};
