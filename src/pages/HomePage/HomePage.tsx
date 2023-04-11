import { BlogList, CustomSelect, ErrorMessage, Loader, ShowMoreBtn, Tabs } from "components";
import { Tab, options, tabs } from "config";
import { memo, useCallback, useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { SelectOptions } from "types";
import { SortWidgetsGroup, StyledHomePage, Title } from "./styles";
import { fetchArticles, fetchNews, getAllArticles, useAppDispatch, useAppSelector } from "store";

export const HomePage = memo(() => {
  const { isLoading, articles, news, error } = useAppSelector(getAllArticles);

  const dispatch = useAppDispatch();

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
        start: 1,
      }),
    );
  }, [dispatch, option.value]);

  useEffect(() => {
    dispatch(
      fetchNews({
        value: option.value,
        text: "",
        limit: Tab.BLOGS_LIMIT,
        start: 1,
      }),
    );
  }, [dispatch, option.value]);

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

      {articles?.length > 0 ? <ShowMoreBtn /> : null}
    </StyledHomePage>
  );
});
