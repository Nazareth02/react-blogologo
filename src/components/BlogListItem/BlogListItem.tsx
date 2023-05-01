import { memo, useCallback } from "react";
import {
  CardDate,
  CardDesc,
  CardImage,
  CardImageWrap,
  CardTextGroup,
  CardWrapper,
  FavoriteIconsWrap,
  StyledBlogListItem,
} from "./styles";
import { BlogItem } from "types";
import { setImageNotFound } from "utils";
import dateFormat from "dateformat";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTES } from "routes";
import { getFavorites, getUser, useAppSelector } from "store";
import { AddFavoritesIcon, FavoritesActiveIcon } from "assets";

interface BlogListItemProps {
  post: BlogItem;
  posts: BlogItem[];
  handleClick: (post: BlogItem) => void;
}

export const BlogListItem = memo(({ post, posts, handleClick }: BlogListItemProps) => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector(getUser);
  const { favorites } = useAppSelector(getFavorites);
  const { imageUrl, publishedAt, title, id } = post;

  const isFavorite = favorites.map((favorite) => favorite.id).some((favorite) => favorite === id);

  const handleBlogItem = useCallback(() => {
    navigate(generatePath(ROUTES.HOME + ROUTES.CONTENT, { id: id }), {
      state: {
        post: post,
        posts: posts,
      },
    });
  }, [navigate, id, post, posts]);

  const handleUpdateFavorite = () => {
    handleClick(post);
  };

  return (
    <StyledBlogListItem>
      <CardWrapper onClick={handleBlogItem}>
        <CardImageWrap>
          <CardImage src={imageUrl} alt="Image not found" onError={setImageNotFound} />
        </CardImageWrap>

        <CardTextGroup>
          <CardDate>{dateFormat(publishedAt, "mmmm dd, yyyy")}</CardDate>
          <CardDesc>{title.length > 70 ? title.slice(0, 70) + " ..." : title}</CardDesc>
        </CardTextGroup>
      </CardWrapper>
      {isAuth ? (
        <FavoriteIconsWrap onClick={handleUpdateFavorite}>
          {isAuth && isFavorite ? <FavoritesActiveIcon /> : <AddFavoritesIcon />}
        </FavoriteIconsWrap>
      ) : (
        <FavoriteIconsWrap />
      )}
    </StyledBlogListItem>
  );
});
