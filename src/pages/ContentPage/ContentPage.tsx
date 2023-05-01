import { BlogContent, BlogList, ErrorMessage, Loader } from "components";
import { memo, useCallback } from "react";
import { RecommendationsCarousel, StyledBlogContentPage } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

import { getBlogById, removeFavorite, setFavorite, useAppDispatch, useAppSelector } from "store";
import { BlogItem } from "types";

export const ContentPage = memo(() => {
  const location = useLocation();
  const { isLoading, error } = useAppSelector(getBlogById);
  const dispatch = useAppDispatch();

  const handleSetFavorite = useCallback(
    (post: BlogItem) => {
      dispatch(setFavorite(post));
    },
    [dispatch],
  );

  return isLoading ? (
    <Loader />
  ) : (
    <StyledBlogContentPage
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{
        type: "tween",
        stiffness: 300,
        damping: 15,
      }}
    >
      <BlogContent blogListItem={location.state.post} handleClick={handleSetFavorite} />
      {error && <ErrorMessage message={error} />}
      <RecommendationsCarousel
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{
          type: "tween",
          stiffness: 300,
          damping: 15,
        }}
        $isFull={location.state.posts.length > 3}
      >
        <BlogList posts={location.state.posts.slice(9, 12)} />
      </RecommendationsCarousel>
    </StyledBlogContentPage>
  );
});
