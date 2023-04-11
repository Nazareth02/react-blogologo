import styled from "styled-components";
import { Color, Media } from "ui";

const StyledShowPreviousBtn = styled.button`
  justify-self: start;
  max-width: 200px;
  padding: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.WHITE};
  background: ${Color.BTN};
  border-radius: 10px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }
  ${Media.PRE_TABLET} {
    padding: 15px;
    font-size: 14px;
    line-height: 20px;
  }
  ${Media.MOBILE_L} {
    padding: 12px;
    font-size: 12px;
    line-height: 16px;
  }
  &:disabled {
    background: ${Color.NAV};
  }
`;

export { StyledShowPreviousBtn };
