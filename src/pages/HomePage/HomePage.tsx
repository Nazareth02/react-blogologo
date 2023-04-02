import { BlogList, CustomSelect, CustomTab } from "components";
import { Tabs } from "components";
import { Tab, options, tabs } from "config";
import { useState } from "react";
import { SingleValue } from "react-select";
import { SelectOptions } from "types";
import { SortWidgetsGroup, StyledHomePage, Title } from "./styles";

export const HomePage = () => {
  const [option, setOption] = useState(options[0]);

  const [isActiveTab, setActiveTab] = useState(tabs[0].id);

  const [currentTab, setCurrentTab] = useState<Tab>(Tab.ARTICLE);

  const handleTab = (value: Tab, id: number) => {
    setCurrentTab(value);
    setActiveTab(id);
  };

  const handleSelect = (option: SingleValue<SelectOptions | null | any>) => {
    setOption(option);
  };

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
};
