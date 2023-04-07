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
import dateFormat from "dateformat";

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
        <CardDate>{dateFormat(published_at, "mmmm dd, yyyy")}</CardDate>
        <CardDesc>{title.length > 70 ? title.slice(0, 70) + " ..." : title}</CardDesc>
      </CardTextGroup>
    </StyledBlogListItem>
  );
});
