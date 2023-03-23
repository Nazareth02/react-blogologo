import { LogoIcon } from "assets";
import { Link } from "react-router-dom";
import { Nav } from "components";
import { StyledHeader } from "./styles";
import { ROUTES } from "routes";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUTES.HOME}>
        <LogoIcon />
      </Link>
      <Nav />
    </StyledHeader>
  );
};
