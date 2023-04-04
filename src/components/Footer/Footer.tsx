import { ThemeToggleBtn } from "components";
import { memo } from "react";
import { FooterText, StyledFooter } from "./styles";

interface FooterProps {
  handleToggle: () => void;
  activeTheme: string;
}

export const Footer = memo(({ handleToggle, activeTheme }: FooterProps) => {
  return (
    <StyledFooter>
      <FooterText>©2022 Blogologo</FooterText>
      <ThemeToggleBtn activeTheme={activeTheme} handleClick={handleToggle} />
    </StyledFooter>
  );
});
