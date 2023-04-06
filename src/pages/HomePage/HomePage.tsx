import { BlogList, CustomSelect, ErrorMessage, Loader, Tabs } from "components";
import { Tab, options, tabs } from "config";
import { memo, useCallback, useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { SelectOptions } from "types";
import { SortWidgetsGroup, StyledHomePage, Title } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { fetchArticles, getAllArticles } from "store";

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
      }),
    );
  }, [dispatch, option.value]);

  // useEffect(() => {
  //   dispatch(fetchNews({ page: requestParams.page, value: option.value, word: "" }));
  // }, [dispatch, option.value, requestParams.page]);

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
    </StyledHomePage>
  );
});
