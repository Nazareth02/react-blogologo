import { BlogList, CustomSelect, Tab } from "components";
import { TabsValues, options } from "config";
import { useToggle } from "hooks";
import { useState } from "react";
import { SingleValue } from "react-select";
import { SelectOptions } from "types";
import { SortWidgetsGroup, StyledHomePage, TabsGroup, Title } from "./styles";

export const HomePage = () => {
  const [option, setOption] = useState(options[0]);
  const [isActiveTab, setActiveTab] = useToggle();
  const [tabValue, setTabValue] = useState<string>(TabsValues.ARTICLE);
  const handleActiveTab = (value: string) => {
    setTabValue(value);
    setActiveTab();
  };
  const handleSelect = (option: SingleValue<SelectOptions | null | any>) => {
    setOption(option);
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
        {tabValue === TabsValues.ARTICLE && <CustomSelect handleSelect={handleSelect} />}
        {tabValue === TabsValues.NEWS && <CustomSelect handleSelect={handleSelect} />}
      </SortWidgetsGroup>
      <BlogList />
    </StyledHomePage>
  );
};
