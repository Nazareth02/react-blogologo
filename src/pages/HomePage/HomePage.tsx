import { BlogList, CustomSelect, Tabs } from "components";
import { Tab, options, tabs } from "config";
import { memo, useCallback, useState } from "react";
import { SingleValue } from "react-select";
import { SelectOptions } from "types";
import { SortWidgetsGroup, StyledHomePage, Title } from "./styles";

export const HomePage = memo(() => {
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

  return (
    <StyledHomePage>
      <Title>Blog</Title>
      <SortWidgetsGroup>
        <Tabs active={isActiveTab} options={tabs} handleClick={handleTab} />
        {currentTab === Tab.ARTICLE && <CustomSelect handleSelect={handleSelect} />}
        {currentTab === Tab.NEWS && <CustomSelect handleSelect={handleSelect} />}
      </SortWidgetsGroup>
      {currentTab === Tab.ARTICLE ? <BlogList /> : <BlogList />}
    </StyledHomePage>
  );
});
