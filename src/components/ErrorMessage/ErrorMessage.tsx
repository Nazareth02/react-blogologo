import React, { memo } from "react";
import { StyledErrorMessage } from "./styles";

interface ErrorMessageProps {
  message: string | null;
}

export const ErrorMessage = memo(({ message }: ErrorMessageProps) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
});
