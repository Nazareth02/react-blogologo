import { testBlogItemImage } from "assets";
import { memo } from "react";
import {
  CardDate,
  CardDesc,
  CardImage,
  CardImageWrap,
  CardTextGroup,
  StyledBlogListItem,
} from "./styles";
import { BlogItem } from "types";

interface BlogListItemProps {
  post: BlogItem;
  posts: BlogItem[];
}

export const BlogListItem = memo(({ post, posts }: BlogListItemProps) => {
  const { image_url, published_at, title, id } = post;

  return (
    <StyledBlogListItem>
      <CardImageWrap>
        <CardImage src={image_url} alt="Image not found" />
      </CardImageWrap>

      <CardTextGroup>
        <CardDate>{published_at}</CardDate>
        <CardDesc>{title.length > 65 ? title.slice(0, 65) + " ..." : title}</CardDesc>
      </CardTextGroup>
    </StyledBlogListItem>
  );
});
