import { StyledTabLink } from "./styles";

interface TabsProps {
  tabLabel: string;
  setTab: () => void;
  isActiveTab: boolean;
}

export const Tab = ({ tabLabel, setTab, isActiveTab }: TabsProps) => {
  return (
    <StyledTabLink to={""} onClick={setTab} $isActiveTab={isActiveTab}>
      {tabLabel}
    </StyledTabLink>
  );
};
