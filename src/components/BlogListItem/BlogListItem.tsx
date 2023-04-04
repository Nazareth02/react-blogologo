import { testBlogItemImage } from "assets";
import { memo } from "react";
import { CardDate, CardDesc, CardImage, CardTextGroup, StyledBlogListItem } from "./styles";

export const BlogListItem = memo(() => {
  return (
    <StyledBlogListItem>
      <CardImage src={testBlogItemImage} alt="Image not found" />
      <CardTextGroup>
        <CardDate>April 20, 2021</CardDate>
        <CardDesc>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</CardDesc>
      </CardTextGroup>
    </StyledBlogListItem>
  );
});
