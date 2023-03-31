import { BlogList, CustomSelect, CustomTab } from "components";
import { Tabs } from "components";
import { Tab, options } from "config";
import { useToggle } from "hooks";
import { useState } from "react";
import { SingleValue } from "react-select";
import { SelectOptions } from "types";
import { TabOptions } from "types";
import { SortWidgetsGroup, StyledHomePage, TabsGroup, Title } from "./styles";

export const HomePage = () => {
  const tabs: TabOptions[] = [
    {
      id: 1,
      label: Tab.ARTICLE_LABEL,
      value: Tab.ARTICLE,
    },
    {
      id: 2,
      label: Tab.NEWS_LABEL,
      value: Tab.ARTICLE,
    },
  ];
  const [option, setOption] = useState(options[0]);

  const [isActiveTab, setActiveTab] = useToggle();

  // const [tabValue, setTabValue] = useState<string>(Tabs.ARTICLE);
  // const handleActiveTab = (value: string) => {
  //   setTabValue(value);
  //   setActiveTab();
  // };
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.ARTICLE);
  const handleTab = (value: Tab) => {
    setCurrentTab(value);
    setActiveTab();
  };
  const handleSelect = (option: SingleValue<SelectOptions | null | any>) => {
    setOption(option);
  };

  return (
    <StyledHomePage>
      <Title>Blog</Title>
      <SortWidgetsGroup>
        <Tabs
          active={isActiveTab}
          options={tabs}
          handleClick={() => handleTab(currentTab)}
        />
        {/* <TabsGroup>
          <CustomTab
            label="Articles"
            onClick={() => handleActiveTab(Tab.ARTICLE)}
            isActive={!isActiveTab}
          />
          <CustomTab
            label="News"
            onClick={() => handleActiveTab(Tab.NEWS)}
            isActive={isActiveTab}
          />
        </TabsGroup> */}
        {/* {tabValue === Tab.ARTICLE && <CustomSelect handleSelect={handleSelect} />}
        {tabValue === Tab.NEWS && <CustomSelect handleSelect={handleSelect} />} */}
        {currentTab === Tab.ARTICLE && <CustomSelect handleSelect={handleSelect} />}
        {currentTab === Tab.NEWS && <CustomSelect handleSelect={handleSelect} />}
      </SortWidgetsGroup>
      {currentTab === Tab.ARTICLE ? <BlogList /> : <BlogList />}
    </StyledHomePage>
  );
};
