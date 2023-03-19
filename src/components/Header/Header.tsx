import { FavoritesActiveIcon, Logo } from "assets";
import { Link } from "react-router-dom";
import { ROUTES } from "routes/routes";
import { Nav } from "../../components/Nav/Nav";
import { StyledHeader } from "./styles";

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
