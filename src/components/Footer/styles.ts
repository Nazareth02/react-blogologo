import styled from "styled-components";
import { Color } from "ui";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  max-width: 1180px;
  padding: 33px 32px;
  margin: auto;
  background: ${Color.BACKGROUND};
`;
const FooterText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.FOOTER_TEXT};
`;

export { FooterText, StyledFooter };
