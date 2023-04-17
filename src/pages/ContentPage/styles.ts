import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

const StyledBlogContentPage = styled(motion.div)``;

const RecommendationsCarousel = styled(motion.div)<{ $isFull: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 40px;

  max-width: 1120px;
  margin: 72px auto 0;

  padding-top: ${({ $isFull }) => ($isFull ? "62px" : 0)};

  border-top: ${({ $isFull }) => ($isFull ? `1px solid ${Color.NAV}` : "none")};
`;

export { RecommendationsCarousel, StyledBlogContentPage };
