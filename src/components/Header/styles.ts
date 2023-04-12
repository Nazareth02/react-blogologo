import styled from "styled-components";
import { Color } from "ui";

const StyledHeader = styled.header<{ $isMenuOpen: boolean; $isMobile: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 20px 32px;
  background: ${Color.HEADER};
  width: 100%;
  position: ${({ $isMenuOpen, $isMobile }) => $isMenuOpen && $isMobile && "fixed"};

  z-index: 5;
`;

export { StyledHeader };
