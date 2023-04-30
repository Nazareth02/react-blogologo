import { motion } from "framer-motion";
import { ShowBtnGroup, Title } from "pages/HomePage/styles";
import styled from "styled-components";
import { Color, Media } from "ui";

const StyledSearchPage = styled(motion.div)`
  max-width: 1120px;
  margin: auto;
`;

const SearchInfoText = styled(Title)``;

const SearchTabInfo = styled.h3`
  margin: 30px 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;

  color: ${Color.FONT};

  ${Media.MOBILE_XL} {
    font-size: 28px;
  }
`;

const SearchBtnGroup = styled(ShowBtnGroup)``;

export { StyledSearchPage, SearchInfoText, SearchTabInfo, SearchBtnGroup };
