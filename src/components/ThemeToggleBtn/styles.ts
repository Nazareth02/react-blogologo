import styled from "styled-components";
import { Color } from "ui";

const StyledToggler = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.FOOTER_TEXT};
`;
const ThemeText = styled.span`
  padding: 3px;
  border: 1px solid ${Color.FOOTER_TEXT};
  border-radius: 5px;
  font-family: "Inter";
  font-style: bold;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
export { StyledToggler, ThemeText };
