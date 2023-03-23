import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 2fr;
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
`;

export { StyledNav, SignUserInfo, StyledLink };
