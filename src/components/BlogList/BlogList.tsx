import { BlogListItem } from "components";
import { memo } from "react";
import { StyledBlogList } from "./styles";

export const BlogList = memo(({ articles }: any) => {
  return (
    <StyledBlogList>
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
    </StyledBlogList>
  );
});
