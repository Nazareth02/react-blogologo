import { BurgerIcon, CloseBurgerIcon } from "assets";
import { StyledBurgerMenuNav } from "./styles";

export const BurgerMenuNav = () => {
  const isActiveBurger = false;
  return (
    <StyledBurgerMenuNav>
      {isActiveBurger ? <CloseBurgerIcon /> : <BurgerIcon />}
    </StyledBurgerMenuNav>
  );
};
