import { memo, useCallback } from "react";

import {
  FavoritesIconWrapper,
  IconsWrapper,
  PostHome,
  PostImage,
  PostInfo,
  PostNumber,
  PostSummaryWrapper,
  PostTitle,
  SiteLink,
  StyledBlogContent,
  Summary,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { AddFavoritesIcon, FavoritesActiveIcon, WebSiteIcon } from "assets";
import { setImageNotFound } from "utils";

import { BlogItem } from "types";

interface BlogContentProps {
  blogListItem: BlogItem;
  //   onClick: (BlogItem: BlogItem) => void;
}

export const BlogContent = memo(({ blogListItem }: BlogContentProps) => {
  const { id, imageUrl, title, summary, url } = blogListItem;

  const navigate = useNavigate();

  const handleHome = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <StyledBlogContent>
      <PostInfo>
        <PostHome onClick={handleHome}>Home </PostHome>
        <PostNumber>/ Post {id}</PostNumber>
      </PostInfo>

      <PostTitle>{title}</PostTitle>

      <PostImage src={imageUrl} alt="Image Not Found" onError={setImageNotFound} />
      <PostSummaryWrapper>
        <Summary>{summary}</Summary>
        <IconsWrapper>
          <FavoritesIconWrapper>
            <AddFavoritesIcon />
          </FavoritesIconWrapper>
          <SiteLink href={url} target="_blank">
            <WebSiteIcon />
          </SiteLink>
        </IconsWrapper>
      </PostSummaryWrapper>
    </StyledBlogContent>
  );
});
