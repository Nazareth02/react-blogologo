import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media } from "ui";

const StyledSignUpPage = styled(motion.div)`
  max-width: 1120px;

  margin: auto;
`;

const HomeRouteLink = styled(Link)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.FONT};
  opacity: 0.8;

  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const PageName = styled.h2`
  margin-top: 32px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;

  display: flex;
  align-items: center;

  color: ${Color.FONT};

  ${Media.PRE_MOBILE} {
    margin-top: 20px;
    font-size: 48px;
  }
  ${Media.MOBILE_L} {
    margin-top: 15px;
    font-size: 40px;
  }
`;

export { StyledSignUpPage, HomeRouteLink, PageName };
