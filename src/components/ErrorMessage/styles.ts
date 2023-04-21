import styled from "styled-components";
import { Color } from "ui";

export const StyledErrorMessage = styled.span`
  display: block;
  text-align: center;
  padding: 20px;
  font-size: 18px;
  border: 1px solid ${Color.ERROR};
  color: ${Color.ERROR};
`;
