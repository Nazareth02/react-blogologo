import { Media } from "ui";
import { Color } from "ui";
import styled from "styled-components";

const Title = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  align-items: center;
  color: ${Color.FONT};
  ${Media.MOBILE_XL} {
    font-size: 44px;
  }
`;

const StyledHomePage = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

const SortWidgetsGroup = styled.div`
  display: grid;
  grid-gap: 25px;
`;

export { Title, StyledHomePage, SortWidgetsGroup };
