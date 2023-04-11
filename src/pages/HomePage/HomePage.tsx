import {
  BlogList,
  CustomSelect,
  ErrorMessage,
  Loader,
  ShowMoreBtn,
  ShowPreviousBtn,
  Tabs,
} from "components";
import { Tab, options, tabs } from "config";
import { memo, useCallback, useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { SelectOptions } from "types";
import { ShowBtnGroup, SortWidgetsGroup, StyledHomePage, Title } from "./styles";
import { fetchArticles, fetchNews, getAllArticles, useAppDispatch, useAppSelector } from "store";

export const HomePage = memo(() => {
  const { isLoading, articles, news, error } = useAppSelector(getAllArticles);

  const [startPage, setStartPage] = useState(1);

  const dispatch = useAppDispatch();

  const handleMoreBooks = useCallback(() => {
    setStartPage((prev) => prev + Tab.BLOGS_LIMIT);
  }, []);

  const handlePreviousBooks = useCallback(() => {
    setStartPage((prev) => prev - Tab.BLOGS_LIMIT);
  }, []);

  const [option, setOption] = useState(options[0]);

  const [isActiveTab, setActiveTab] = useState(tabs[0].id);

  const [currentTab, setCurrentTab] = useState<Tab>(Tab.ARTICLE);

  const handleTab = useCallback((value: Tab, id: number) => {
    setCurrentTab(value);
    setActiveTab(id);
  }, []);

  const handleSelect = useCallback((option: SingleValue<SelectOptions | null | any>) => {
    setOption(option);
  }, []);

  useEffect(() => {
    dispatch(
      fetchArticles({
        value: option.value,
        text: "",
        limit: Tab.BLOGS_LIMIT,
        start: startPage,
      }),
    );
  }, [dispatch, option.value, startPage]);

  useEffect(() => {
    dispatch(
      fetchNews({
        value: option.value,
        text: "",
        limit: Tab.BLOGS_LIMIT,
        start: startPage,
      }),
    );
  }, [dispatch, option.value, startPage]);

  return (
    <StyledHomePage>
      <Title>Blog</Title>
      <SortWidgetsGroup>
        <Tabs active={isActiveTab} options={tabs} handleClick={handleTab} />
        {currentTab === Tab.ARTICLE && <CustomSelect handleSelect={handleSelect} />}
        {currentTab === Tab.NEWS && <CustomSelect handleSelect={handleSelect} />}
      </SortWidgetsGroup>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error}></ErrorMessage>
      ) : currentTab === Tab.ARTICLE ? (
        <BlogList posts={articles} />
      ) : (
        <BlogList posts={news} />
      )}

      {/* <ShowPreviousBtn startPage={startPage} handleClick={handlePreviousBooks} />
       */}

      {!isLoading ? (
        <ShowBtnGroup>
          <ShowPreviousBtn startPage={startPage} handleClick={handlePreviousBooks} />
          <ShowMoreBtn handleClick={handleMoreBooks} />
        </ShowBtnGroup>
      ) : null}
    </StyledHomePage>
  );
});
