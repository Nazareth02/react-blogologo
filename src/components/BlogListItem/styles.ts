import styled from "styled-components";
import { Color, Media } from "ui";

const StyledBlogListItem = styled.li`
  display: grid;
  place-content: center;
  max-width: 352px;
  max-height: 388px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background: linear-gradient(rgba(77, 10, 199, 0.6), rgba(145, 46, 242, 0.6) 108.59%);
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

const CardImage = styled.img`
  max-width: 352px;
  width: 100%;
  max-height: 208px;
  border-radius: 16px 16px 0 0;
  mask-image: linear-gradient(rgba(77, 10, 199, 0.6), rgba(145, 46, 242, 0.6) 108.59%);
  transition: 0.4s;

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
  ${Media.LAPTOP_S} {
    font-size: 14px;
  }
  ${Media.TABLET} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const CardDesc = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  align-items: center;
  color: ${Color.FONT};
  ${Media.LAPTOP_S} {
    font-size: 16px;
  }
  ${Media.TABLET} {
    font-size: 18px;
    line-height: 28px;
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
    padding: 18px;
  }
  ${Media.TABLET} {
    grid-gap: 4px;
    padding: 18px;
  }
`;

export { StyledBlogListItem, CardImage, CardDate, CardDesc, CardTextGroup };
