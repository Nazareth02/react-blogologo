import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledAccountPage = styled(motion.div)`
  display: grid;
  place-content: center;

  max-width: 1120px;
  margin: auto;
`;

const UserInfoGroup = styled.div`
  display: grid;
  grid-gap: 45px;
`;

const FavoritesLink = styled(Link)``;

const NameInfo = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;

  display: flex;
  align-items: center;

  color: ${Color.FONT};
`;

const EmailInfo = styled.span``;

const CreationInfo = styled.span``;

const NotSignedInfo = styled.h2``;

export {
  StyledAccountPage,
  UserInfoGroup,
  FavoritesLink,
  CreationInfo,
  EmailInfo,
  NameInfo,
  NotSignedInfo,
};
