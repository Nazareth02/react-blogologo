import { LogoIcon } from "assets";
import { Nav, BurgerMenuNav } from "components";
import { StyledHeader, StyledHomeLink } from "./styles";
import { ROUTES } from "routes";
import { memo } from "react";
import { useToggle, useWindowSize } from "hooks";

export const Header = memo(() => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width < 619;

  //preventing vertical scroll while isMenuOpen
  isMenuOpen && isMobile
    ? document.body.setAttribute("style", "overflow: hidden")
    : document.body.setAttribute("style", "overflow: 0");
  // ToDo: Switch this nonsense to custom hook useLockBodyScroll()//

  return (
    <StyledHeader $isMenuOpen={isMenuOpen} $isMobile={isMobile}>
      <StyledHomeLink to={ROUTES.HOME}>
        <LogoIcon />
      </StyledHomeLink>
      <Nav isOpen={isMenuOpen} isMobile={isMobile} handleClose={toggleMenu} />
      {isMobile && <BurgerMenuNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />}
    </StyledHeader>
  );
});
