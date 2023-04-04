import { BurgerIcon, CloseBurgerIcon } from "assets";
import { memo } from "react";
import { StyledBurgerMenuNav } from "./styles";

export const BurgerMenuNav = memo(() => {
  const isActiveBurger = false;
  return (
    <StyledBurgerMenuNav>{isActiveBurger ? <CloseBurgerIcon /> : <BurgerIcon />}</StyledBurgerMenuNav>
  );
});
