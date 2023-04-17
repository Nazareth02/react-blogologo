import { BlogContent, BlogList, ErrorMessage, Loader } from "components";
import { memo, useCallback } from "react";
import { RecommendationsCarousel, StyledBlogContentPage } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

import { getBlogById, useAppSelector } from "store";

export const ContentPage = memo(() => {
  const location = useLocation();

  const { isLoading, error } = useAppSelector(getBlogById);

  const navigate = useNavigate();
  console.log(location.state.posts.length < 3);

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
      <BlogContent blogListItem={location.state.post} />
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
