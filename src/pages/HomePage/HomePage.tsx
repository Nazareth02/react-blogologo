import { BlogList, CustomSelect, Tab } from "components";
import { TabsValues } from "config";
import { useToggle } from "hooks";
import { useState } from "react";
import { SortWidgetsGroup, StyledHomePage, TabsGroup, Title } from "./styles";

export const HomePage = () => {
  const [isActiveTab, setActiveTab] = useToggle();
  const [tabValue, setTabValue] = useState<string>(TabsValues.ARTICLE);
  const [first, setfirst] = useState();
  const handleActiveTab = (value: string) => {
    setTabValue(value);
    setActiveTab();
  };
  return (
    <StyledHomePage>
      <Title>Blog</Title>
      <SortWidgetsGroup>
        <TabsGroup>
          <Tab
            tabLabel="Articles"
            setTab={() => handleActiveTab(TabsValues.ARTICLE)}
            isActiveTab={!isActiveTab}
          />
          <Tab
            tabLabel="News"
            setTab={() => handleActiveTab(TabsValues.NEWS)}
            isActiveTab={isActiveTab}
          />
        </TabsGroup>
        <CustomSelect />
      </SortWidgetsGroup>
      <BlogList />
    </StyledHomePage>
  );
};
