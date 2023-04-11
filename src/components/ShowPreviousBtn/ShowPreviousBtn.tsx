import { memo } from "react";
import { StyledShowPreviousBtn } from "./styles";

interface BtnProps {
  handleClick: () => void;
  startPage: number;
}

export const ShowPreviousBtn = memo(({ handleClick, startPage }: BtnProps) => {
  return (
    <StyledShowPreviousBtn
      {...(startPage < 12 ? { disabled: true } : { disabled: false })}
      onClick={handleClick}
    >
      Show previous
    </StyledShowPreviousBtn>
  );
});
