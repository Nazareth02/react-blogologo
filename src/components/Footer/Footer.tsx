import { ThemeToggleBtn } from "components";
import { FooterText, StyledFooter } from "./styles";

interface FooterProps {
  handleToggle: () => void;
  activeTheme: string;
}

export const Footer = ({ handleToggle, activeTheme }: FooterProps) => {
  return (
    <StyledFooter>
      <FooterText>©2022 Blogologo</FooterText>
      <ThemeToggleBtn activeTheme={activeTheme} handleClick={handleToggle} />
    </StyledFooter>
  );
};
