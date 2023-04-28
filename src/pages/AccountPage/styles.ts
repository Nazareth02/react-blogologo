import { motion } from "framer-motion";
import { HomeRouteLink } from "pages/SignUpPage/styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Media } from "ui";

const StyledAccountPage = styled(motion.div)`
  max-width: 624px;
  padding: 40px;
  margin: 72px auto 100px;

  border-radius: 16px;
  background-color: ${Color.HEADER};

  ${Media.PRE_MOBILE} {
    gap: 20px;
    padding: 30px;
    margin: 42px auto 80px;
  }
  ${Media.MOBILE_L} {
    margin: 32px auto 20px;
  }
`;

const UserInfoGroup = styled.div`
  display: grid;
  grid-gap: 45px;
`;

const BackHomeLink = styled(Link)`
  display: flex;
  gap: 5px;
  padding: 12px;
  align-items: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  background: ${Color.PRIMARY};
  border-radius: 4px;

  color: ${Color.WHITE};
  opacity: 0.7;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }

  ${Media.PRE_MOBILE} {
    font-size: 14px;
  }
  ${Media.MOBILE_L} {
    padding: 10px;
    font-size: 12px;
    line-height: 20px;
  }
`;

const FavoritesLink = styled(Link)`
  justify-self: end;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.7;
  transition: 0.3s;
  color: ${Color.PRIMARY};
  &:hover {
    opacity: 1;
  }
`;

const NameInfo = styled.h2`
  display: flex;
  align-items: center;
  margin-top: 40px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;

  color: ${Color.FONT};

  ${Media.PRE_MOBILE} {
    font-size: 42px;
    line-height: 50px;
  }
  ${Media.MOBILE_L} {
    font-size: 32px;
    line-height: 40px;
  }
`;

const EmailInfo = styled.span`
  padding: 15px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  background: ${Color.NAV};

  border-radius: 4px;

  color: ${Color.FOOTER_TEXT};

  ${Media.PRE_MOBILE} {
    font-size: 14px;
  }
  ${Media.MOBILE_L} {
    font-size: 12px;
    line-height: 20px;
  }
`;

const CreationInfo = styled.span`
  padding: 15px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  background: ${Color.NAV};

  border-radius: 4px;

  color: ${Color.FOOTER_TEXT};

  ${Media.PRE_MOBILE} {
    font-size: 14px;
  }
  ${Media.MOBILE_L} {
    font-size: 12px;
    line-height: 20px;
  }
`;

const LogOutBtn = styled.h2`
  display: flex;
  gap: 5px;
  padding: 12px;
  align-items: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  background: ${Color.ERROR};
  border-radius: 4px;

  color: ${Color.WHITE};
  opacity: 0.7;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
  }

  ${Media.PRE_MOBILE} {
    font-size: 14px;
  }
  ${Media.MOBILE_L} {
    padding: 10px;
    font-size: 12px;
    line-height: 20px;
  }
`;

const NavBtnGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NotSignedInfo = styled.h2`
  text-align: center;
`;
const BoldInfo = styled.span`
  color: ${Color.FONT};
`;

export {
  BoldInfo,
  StyledAccountPage,
  UserInfoGroup,
  FavoritesLink,
  CreationInfo,
  EmailInfo,
  NameInfo,
  NotSignedInfo,
  BackHomeLink,
  LogOutBtn,
  NavBtnGroup,
};
