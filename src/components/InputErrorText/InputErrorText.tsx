import { memo } from "react";
import { StyledInputErrorText } from "./styles";

interface ErrorMessageProps {
  message: string | null;
}

export const InputErrorText = memo(({ message }: ErrorMessageProps) => {
  return <StyledInputErrorText>{message}</StyledInputErrorText>;
});
