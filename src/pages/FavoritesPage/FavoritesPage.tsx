import { memo, useCallback } from "react";
import { useAppDispatch, setFavorite, removeFavorite, useAppSelector, getFavorites } from "store";
import { BlogItem } from "types";
import { FavoritesText, FavoritesTitle, StyledFavoritesList, StyledFavoritesPage } from "./styles";
import { FavoritesActiveIcon } from "assets";
import { BlogList, BlogListItem } from "components";

export const FavoritesPage = memo(() => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector(getFavorites);

  const handleRemoveFavorite = useCallback(
    (post: BlogItem) => {
      dispatch(removeFavorite(post));
    },
    [dispatch],
  );

  return (
    <StyledFavoritesPage
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{
        type: "tween",
        stiffness: 300,
        damping: 15,
      }}
    >
      <FavoritesTitle>Your Favorites:</FavoritesTitle>
      {favorites.length === 0 && (
        <FavoritesText>
          Bookmark your favorite posts here and enjoy quick and convenient access to them
        </FavoritesText>
      )}
      <StyledFavoritesList>
        {Array.isArray(favorites) &&
          favorites.map((favorite) => (
            <BlogListItem
              post={favorite}
              key={favorite.id}
              posts={favorites}
              handleClick={handleRemoveFavorite}
            />
          ))}
      </StyledFavoritesList>
    </StyledFavoritesPage>
  );
});
