import { memo, useCallback } from "react";
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
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "routes";

interface BlogListItemProps {
  post: BlogItem;
  posts: BlogItem[];
}

export const BlogListItem = memo(({ post, posts }: BlogListItemProps) => {
  const navigate = useNavigate();

  const { imageUrl, publishedAt, title, id } = post;

  const handleBlogItem = useCallback(() => {
    navigate(generatePath(ROUTES.HOME + ROUTES.CONTENT, { id: id }), {
      state: {
        post: post,
        posts: posts,
      },
    });
  }, [navigate, id, post, posts]);

  return (
    <StyledBlogListItem onClick={handleBlogItem}>
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
