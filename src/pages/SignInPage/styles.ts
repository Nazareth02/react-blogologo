import { motion } from "framer-motion";
import { HomeRouteLink, PageName } from "pages/SignUpPage/styles";
import styled from "styled-components";

const StyledSignInPage = styled(motion.div)`
  max-width: 1120px;

  margin: auto;
`;

const HomeRoute = styled(HomeRouteLink)``;

const PageLabel = styled(PageName)``;

export { StyledSignInPage, HomeRoute, PageLabel };
