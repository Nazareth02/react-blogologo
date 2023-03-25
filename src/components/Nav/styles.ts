import { Color } from "./../../ui/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Media } from "ui";

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
`;
const SignUserInfo = styled.span`
  margin-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 34px;
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 15px;
  border-left: 2px solid ${Color.GRAY};
`;

export { StyledNav, SignUserInfo, StyledLink };
