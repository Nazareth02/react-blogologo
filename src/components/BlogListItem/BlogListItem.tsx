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
import { setImageNotFound } from "utils";
import dateFormat from "dateformat";
import { getBlogById, useAppDispatch, useAppSelector } from "store";
import { Loader } from "components";

interface BlogListItemProps {
  post: BlogItem;
  posts: BlogItem[];
}

export const BlogListItem = memo(({ post, posts }: BlogListItemProps) => {
  const { imageUrl, publishedAt, title, id } = post;

  return (
    <StyledBlogListItem>
      <CardImageWrap>
        <CardImage src={imageUrl} alt="Image not found" onError={setImageNotFound} />
      </CardImageWrap>

      <CardTextGroup>
        <CardDate>{dateFormat(publishedAt, "mmmm dd, yyyy")}</CardDate>
        <CardDesc>{title.length > 70 ? title.slice(0, 70) + " ..." : title}</CardDesc>
      </CardTextGroup>
    </StyledBlogListItem>
  );
});
