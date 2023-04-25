import { motion } from "framer-motion";
import { HomeRouteLink, PageName } from "pages/SignUpPage/styles";
import styled from "styled-components";

const StyledResetPage = styled(motion.div)`
  max-width: 1120px;
  margin: auto;
`;

const PageSpan = styled(PageName)``;

const GoHomeLink = styled(HomeRouteLink)``;

export { StyledResetPage, PageSpan, GoHomeLink };
