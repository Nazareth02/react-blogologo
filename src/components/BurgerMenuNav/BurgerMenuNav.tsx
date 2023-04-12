import { BurgerIcon, CloseBurgerIcon } from "assets";
import { memo } from "react";
import { StyledBurgerMenuNav } from "./styles";

interface BurgerMenuNavProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenuNav = memo(({ toggleMenu, isMenuOpen }: BurgerMenuNavProps) => {
  return (
    <StyledBurgerMenuNav onClick={toggleMenu}>
      {isMenuOpen ? <CloseBurgerIcon /> : <BurgerIcon />}
    </StyledBurgerMenuNav>
  );
});
