import { testBlogItemImage } from "assets";
import { CardDate, CardDesc, CardImage, CardTextGroup, StyledBlogListItem } from "./styles";

export const BlogListItem = () => {
  return (
    <StyledBlogListItem>
      <CardImage src={testBlogItemImage} alt="Image not found" />
      <CardTextGroup>
        <CardDate>April 20, 2021</CardDate>
        <CardDesc>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</CardDesc>
      </CardTextGroup>
    </StyledBlogListItem>
  );
};
