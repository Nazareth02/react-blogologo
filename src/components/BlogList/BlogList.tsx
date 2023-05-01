import { BlogListItem } from "components";
import { memo, useCallback } from "react";
import { StyledBlogList } from "./styles";
import { BlogItem } from "types";
import { setFavorite, useAppDispatch } from "store";

interface BlogListProps {
  posts: BlogItem[];
}

export const BlogList = memo(({ posts }: BlogListProps) => {
  const dispatch = useAppDispatch();

  const handleSetFavorite = useCallback(
    (post: BlogItem) => {
      dispatch(setFavorite(post));
    },
    [dispatch],
  );

  return (
    <StyledBlogList>
      {Array.isArray(posts) &&
        posts.map((post) => (
          <BlogListItem post={post} key={post.id} posts={posts} handleClick={handleSetFavorite} />
        ))}
    </StyledBlogList>
  );
});
