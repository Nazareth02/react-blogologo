import styled from "styled-components";
import { Color, Media } from "ui";

const StyledBlogContent = styled.div`
  max-width: 1120px;

  width: 100%;

  margin: 0 auto;
`;

const PostInfo = styled.div``;

const PostHome = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${Color.FONT};

  cursor: pointer;
`;

const PostNumber = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: ${Color.FOOTER_TEXT}; ;
`;

const PostTitle = styled.h2`
  width: 100%;
  margin-top: 32px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;

  color: ${Color.FONT};

  ${Media.LAPTOP_M} {
    font-size: 53px;
  }
  ${Media.LAPTOP_S} {
    font-size: 40px;
  }
  ${Media.PRE_TABLET} {
    font-size: 38px;
    line-height: 55px;
  }
  ${Media.MOBILE_XL} {
    font-size: 26px;
    line-height: 45px;
  }
  ${Media.MOBILE_M} {
    font-size: 22px;
    line-height: 45px;
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 518px;
  margin-top: 48px;

  border-radius: 16px;
  object-fit: cover;
  object-position: center;

  ${Media.LAPTOP_S} {
    height: 458px;
  }
  ${Media.PRE_TABLET} {
    margin-top: 25px;

    height: 418px;
  }
  ${Media.TABLET} {
    height: 300px;
  }
  ${Media.PRE_MOBILE} {
    margin-top: 15px;

    height: 250px;
  }
  ${Media.MOBILE_L} {
    height: 200px;
  }
`;

const PostSummaryWrapper = styled.div`
  display: grid;
  grid-gap: 48px;

  max-width: 920px;
  margin: 48px auto 0;

  ${Media.PRE_TABLET} {
    margin-top: 25px;
  }
  ${Media.PRE_MOBILE} {
    margin-top: 15px;
  }
`;

const Summary = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;

  color: ${Color.FONT};

  ${Media.PRE_TABLET} {
    font-size: 15px;
  }
  ${Media.PRE_MOBILE} {
    font-size: 13px;
  }
`;

const SiteLink = styled.a`
  width: 80px;
  height: 50px;
  text-align: center;
  align-items: center;
  background: ${Color.NAV};
  border-radius: 5px;
`;

export {
  StyledBlogContent,
  PostInfo,
  PostHome,
  PostNumber,
  PostTitle,
  PostImage,
  PostSummaryWrapper,
  Summary,
  SiteLink,
};
