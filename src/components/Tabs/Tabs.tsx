import { CustomTab } from "components";
import { Tab } from "config";
import { TabOptions } from "types";
import { StyledTabs } from "./styles";

export interface TabsProps {
  active: boolean;
  options: TabOptions[];
  handleClick: (value: Tab) => void;
}

export const Tabs = ({ active, options, handleClick }: TabsProps) => {
  return (
    <StyledTabs>
      {options.map(({ id, label, value }) => (
        <CustomTab
          key={id}
          label={label}
          isActive={active}
          onClick={() => handleClick(value)}
          options={options}
        />
      ))}
    </StyledTabs>
  );
};
