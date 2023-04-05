import styled from "styled-components";
import { Color } from "ui";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  padding: 33px 0;
  margin: 72px auto 0;
  background: ${Color.BACKGROUND};
  border-top: 1px solid ${Color.NAV};
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
