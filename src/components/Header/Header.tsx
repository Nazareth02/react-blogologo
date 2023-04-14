import { LogoIcon } from "assets";
import { Link } from "react-router-dom";
import { Nav, BurgerMenuNav } from "components";
import { StyledHeader } from "./styles";
import { ROUTES } from "routes";
import { memo } from "react";
import { useToggle, useWindowSize } from "hooks";

export const Header = memo(() => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width < 609;

  //preventing vertical scroll while isMenuOpen
  isMenuOpen && isMobile
    ? document.body.setAttribute("style", "overflow: hidden")
    : document.body.setAttribute("style", "overflow: 0");
  //

  return (
    <StyledHeader $isMenuOpen={isMenuOpen} $isMobile={isMobile}>
      <Link to={ROUTES.HOME}>
        <LogoIcon />
      </Link>
      <Nav isOpen={isMenuOpen} isMobile={isMobile} handleClose={toggleMenu} />
      {isMobile && <BurgerMenuNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />}
    </StyledHeader>
  );
});
