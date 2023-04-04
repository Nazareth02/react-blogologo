import { Tab } from "config";
import { useCallback } from "react";
import { StyledTabLink } from "./styles";

interface CustomTabProps {
  label: Tab;
  onClick: (value: Tab, id: number) => void;
  isActive: number;
  value: Tab;
  id: number;
}

export const CustomTab = ({ id, value, label, onClick, isActive }: CustomTabProps) => {
  const handleClick = useCallback(() => {
    onClick(value, id);
  }, []);
  return (
    <StyledTabLink to={""} onClick={handleClick} $isActiveTab={isActive}>
      {label}
    </StyledTabLink>
  );
};
