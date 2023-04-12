import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledTabLink = styled(Link)<{ $isActiveTab: number }>`
  padding: 47px 0 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-bottom: ${({ $isActiveTab }) => ($isActiveTab ? `2.2px solid ${Color.FOOTER_TEXT}` : "none")};
  cursor: pointer;
`;
export { StyledTabLink };
