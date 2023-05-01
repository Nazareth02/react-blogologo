import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media } from "ui";

const StyledFavoritesPage = styled(motion.div)`
  max-width: 1120px;
  margin: auto;
`;

const FavoritesTitle = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 80px;
  align-items: center;
  color: ${Color.FONT};
  ${Media.MOBILE_XL} {
    font-size: 44px;
  }
`;

const FavoritesText = styled.span`
  margin: 35px;
  display: flex;
  justify-content: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: ${Color.FONT};
`;

const StyledFavoritesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  width: 100%;
  margin-top: 50px;
  grid-gap: 40px 32px;
  ${Media.PRE_TABLET} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 35px 25px;
  }
  ${Media.PRE_MOBILE} {
    grid-template-columns: 1fr;
  }
`;

export { StyledFavoritesPage, FavoritesTitle, FavoritesText, StyledFavoritesList };
