import { Tab } from "config";
import { TabOptions } from "types";
import { StyledTabLink } from "./styles";

interface CustomTabProps {
  label: Tab;
  options: TabOptions[];
  onClick: () => void;
  isActive: boolean;
}

export const CustomTab = ({ options, label, onClick, isActive }: CustomTabProps) => {
  return (
    <StyledTabLink to={""} onClick={onClick} $isActiveTab={isActive}>
      {label}
    </StyledTabLink>
  );
};
