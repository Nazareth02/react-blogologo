import { motion } from "framer-motion";
import { Color } from "./../../ui/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Media } from "ui";

const StyledNav = styled(motion.nav)`
  display: flex;
  gap: 30px;
  align-items: center;

  ${Media.PRE_MOBILE} {
    padding-top: 30px;

    position: fixed;
    top: 100px;
    left: 0;
    z-index: 10;

    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 50px;

    width: 100vw;
    height: calc(100vh - 100px);
    background-color: ${Color.NAV};
    opacity: 0;
    transform: translateX(-100%);
  }
`;
const SignUserInfo = styled.span`
  margin-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 34px;
  color: ${Color.FONT};
`;
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 15px;
  border-left: 2px solid ${Color.NAV};
  ${Media.PRE_MOBILE} {
    height: 10%;
  }
`;

const FavoritesSpan = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 34px;
  color: ${Color.FONT};
`;

const HomeSpan = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 34px;
  color: ${Color.FONT};
`;

export { StyledNav, SignUserInfo, StyledLink, FavoritesSpan, HomeSpan };
