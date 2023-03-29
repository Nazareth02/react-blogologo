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
  color: ${Color.SECONDARY};
  ${Media.MOBILE_XL} {
  }
`;
const TabsGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 40px;
  text-align: center;

  color: ${Color.SECONDARY};
  border-bottom: 1px solid ${Color.SECONDARY_EXTRALIGHT};
`;
const StyledHomePage = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`;

const SortWidgetsGroup = styled.div`
  display: grid;
  gap: 25px;
`;

export { Title, TabsGroup, StyledHomePage, SortWidgetsGroup };
