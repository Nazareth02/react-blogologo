import { Tab } from "config";
import { TabOptions } from "types";
import { StyledTabLink } from "./styles";

interface CustomTabProps {
  label: Tab;
  onClick: (value: Tab, id: number) => void;
  isActive: number;
  value: Tab;
  id: number;
}

export const CustomTab = ({ id, value, label, onClick, isActive }: CustomTabProps) => {
  const handleClick = () => {
    onClick(value, id);
  };
  return (
    <StyledTabLink to={""} onClick={handleClick} $isActiveTab={isActive}>
      {label}
    </StyledTabLink>
  );
};
