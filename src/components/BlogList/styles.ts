import styled from "styled-components";
import { Media } from "ui";

const StyledBlogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  width: 100%;
  grid-gap: 40px 32px;
  ${Media.PRE_TABLET} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 35px 25px;
  }
  ${Media.PRE_MOBILE} {
    grid-template-columns: 1fr;
  }
`;

export { StyledBlogList };
