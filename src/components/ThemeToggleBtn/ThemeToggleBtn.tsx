import { memo } from "react";
import { StyledToggler, ThemeText } from "./styles";

interface TogglerProps {
  handleClick: () => void;
  activeTheme: string;
}

export const ThemeToggleBtn = memo(({ handleClick, activeTheme }: TogglerProps) => {
  return (
    <StyledToggler onClick={handleClick}>
      <ThemeText>{activeTheme === "light" ? "dark" : "light"}</ThemeText> theme
    </StyledToggler>
  );
});
