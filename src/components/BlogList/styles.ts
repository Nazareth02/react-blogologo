import styled from "styled-components";
import { Media } from "ui";

const StyledBlogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  width: 100%;
  grid-gap: 40px 32px;
  ${Media.TABLET} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${Media.MOBILE_XL} {
    grid-template-columns: 1fr;
  }
`;

export { StyledBlogList };
