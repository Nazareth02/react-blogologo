import styled from "styled-components";
import { Color, Media } from "ui";

const StyledBlogListItem = styled.li`
  position: relative;
  display: grid;
  max-width: 352px;
  max-height: 388px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: ${Color.CARD_BG};
  mix-blend-mode: normal;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background: ${Color.BACKGROUND};
    transform: scale(1.05);
    mask: none;
  }

  ${Media.MOBILE_XL} {
    max-width: 352px;
    max-height: 388px;
    width: 100%;
    height: 100%;
  }
`;

const CardImageWrap = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  height: 208px;
`;
const CardWrapper = styled.div``;

const CardImage = styled.img`
  max-width: 352px;
  min-height: 208px;
  width: 100%;
  height: 208px;

  border-radius: 16px 16px 0 0;
  mask-image: linear-gradient(
    133.87deg,
    rgba(77, 10, 199, 0.6) -10.18%,
    rgba(145, 46, 242, 0.6) 108.59%
  );
  transition: 0.4s;

  object-fit: cover;
  object-position: 100% 30%;

  &:hover {
    mask: none;
  }
`;

const CardDate = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${Color.FONT};
  ${Media.LAPTOP_M} {
    font-size: 14px;
  }
  ${Media.LAPTOP_S} {
    font-size: 12px;
  }
  ${Media.TABLET} {
    font-size: 14px;
    line-height: 24px;
  }
`;

const CardDesc = styled.span`
  min-height: 85px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  align-items: center;
  color: ${Color.FONT};
  ${Media.LAPTOP_M} {
    font-size: 16px;
  }
  ${Media.LAPTOP_S} {
    font-size: 15px;
  }
  ${Media.TABLET} {
    font-size: 16px;
  }
`;

const CardTextGroup = styled.div`
  display: grid;
  grid-gap: 8px;
  padding: 32px;
  background: ${Color.BACKGROUND};
  border-radius: 0 0 16px 16px;
  ${Media.LAPTOP_S} {
    grid-gap: 4px;
    padding: 16px;
  }
  ${Media.TABLET} {
    grid-gap: 4px;
    padding: 16px;
  }
`;

const FavoriteIconsWrap = styled.div`
  position: absolute;
  top: 43%;
  right: 4%;
  font-size: 1.5rem;
  color: ${Color.WHITE};

  cursor: pointer;
`;

export {
  StyledBlogListItem,
  CardImage,
  CardDate,
  CardDesc,
  CardTextGroup,
  CardImageWrap,
  FavoriteIconsWrap,
  CardWrapper,
};
