import { memo } from "react";
import { StyledShowMoreBtn } from "./styles";

interface BtnProps {
  handleClick: () => void;
}

export const ShowMoreBtn = memo(({ handleClick }: BtnProps) => {
  return <StyledShowMoreBtn onClick={handleClick}>Show More</StyledShowMoreBtn>;
});
