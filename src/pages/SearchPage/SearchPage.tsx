import { memo, useCallback, useEffect, useState } from "react";
import { SearchBtnGroup, SearchInfoText, SearchTabInfo, StyledSearchPage } from "./styles";
import { fetchArticles, fetchNews, getAllArticles, useAppDispatch, useAppSelector } from "store";
import { BlogList, ErrorMessage, Loader, ShowMoreBtn, ShowPreviousBtn } from "components";
import { Tab } from "config";

export const SearchPage = memo(() => {
  const [startPosts, setStartPosts] = useState(1);

  const dispatch = useAppDispatch();
  const { searchValue, isLoading, error, articles, news } = useAppSelector(getAllArticles);

  useEffect(() => {
    searchValue &&
      dispatch(
        fetchArticles({
          value: "",
          text: searchValue,
          limit: Tab.SEARCH_LIMIT,
          start: startPosts,
        }),
      );
  }, [dispatch, startPosts, searchValue]);

  useEffect(() => {
    searchValue &&
      dispatch(
        fetchNews({
          value: "",
          text: searchValue,
          limit: Tab.SEARCH_LIMIT,
          start: startPosts,
        }),
      );
  }, [dispatch, startPosts, searchValue]);

  const handleMoreBooks = useCallback(() => {
    setStartPosts((startPosts) => startPosts + Tab.SEARCH_LIMIT);
  }, []);

  const handlePreviousBooks = useCallback(() => {
    setStartPosts((startPosts) => startPosts - Tab.SEARCH_LIMIT);
  }, []);

  return (
    <StyledSearchPage
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{
        type: "tween",
        stiffness: 300,
        damping: 15,
      }}
    >
      <SearchInfoText>Search results ‘{searchValue}’</SearchInfoText>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error}></ErrorMessage>
      ) : (
        <>
          <SearchTabInfo>
            {articles.length ? "Articles:" : "Sorry, we haven't found anything for Articles 😕"}
          </SearchTabInfo>
          <BlogList posts={articles} />
          <SearchTabInfo>
            {news.length ? "News:" : "Sorry, we haven't found anything for News 😕"}
          </SearchTabInfo>

          <BlogList posts={news} />
        </>
      )}

      {!isLoading ? (
        <SearchBtnGroup>
          <ShowPreviousBtn startPage={startPosts} handleClick={handlePreviousBooks} />
          <ShowMoreBtn handleClick={handleMoreBooks} />
        </SearchBtnGroup>
      ) : null}
    </StyledSearchPage>
  );
});
