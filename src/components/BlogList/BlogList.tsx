import { BlogListItem } from "components";
import { memo } from "react";
import { StyledBlogList } from "./styles";
import { useAppDispatch } from "store";
import { BlogItem } from "types";

interface BlogListProps {
  posts: BlogItem[];
}

export const BlogList = memo(({ posts }: BlogListProps) => {
  // const dispatch = useAppDispatch();
  return (
    <StyledBlogList>
      {Array.isArray(posts) &&
        posts.map((post) => <BlogListItem post={post} key={post.id} posts={posts} />)}
    </StyledBlogList>
  );
});
