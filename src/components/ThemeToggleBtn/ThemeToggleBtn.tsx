import { StyledToggler, ThemeText } from "./styles";

interface TogglerProps {
  handleClick: () => void;
  activeTheme: string;
}

export const ThemeToggleBtn = ({ handleClick, activeTheme }: TogglerProps) => {
  return (
    <StyledToggler onClick={handleClick}>
      Change to <ThemeText>{activeTheme === "light" ? "dark" : "light"}</ThemeText> theme
    </StyledToggler>
  );
};
