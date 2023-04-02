import { CustomTab } from "components";
import { Tab } from "config";
import { TabOptions } from "types";
import { StyledTabs } from "./styles";

export interface TabsProps {
  active: number;
  options: TabOptions[];
  handleClick: (value: Tab, id: number) => void;
}

export const Tabs = ({ active, options, handleClick }: TabsProps) => {
  return (
    <StyledTabs>
      {options.map(({ label, value, id }) => (
        <CustomTab
          value={value}
          label={label}
          isActive={active === id ? 1 : 0}
          onClick={handleClick}
          id={id}
        />
      ))}
    </StyledTabs>
  );
};
