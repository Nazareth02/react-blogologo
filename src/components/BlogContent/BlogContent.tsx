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
import { getFavorites, getUser, useAppSelector } from "store";
import { ROUTES } from "routes";

interface BlogContentProps {
  blogListItem: BlogItem;
  handleClick: (blogListItem: BlogItem) => void;
}

export const BlogContent = memo(({ blogListItem, handleClick }: BlogContentProps) => {
  const { id, imageUrl, title, summary, url } = blogListItem;
  const { favorites } = useAppSelector(getFavorites);
  const { isAuth } = useAppSelector(getUser);
  const isFavorite = favorites.map((favorite) => favorite.id).some((favorite) => favorite === id);

  const navigate = useNavigate();

  const handleHome = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleSetFavorite = () => {
    !isAuth && navigate(ROUTES.HOME + ROUTES.SIGN_IN);
    handleClick(blogListItem);
  };

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
          <FavoritesIconWrapper onClick={handleSetFavorite}>
            {isAuth && isFavorite ? <FavoritesActiveIcon /> : <AddFavoritesIcon />}
          </FavoritesIconWrapper>
          <SiteLink href={url} target="_blank">
            <WebSiteIcon />
          </SiteLink>
        </IconsWrapper>
      </PostSummaryWrapper>
    </StyledBlogContent>
  );
});
