import styled from "styled-components";
import { Color } from "ui";

type isDarkTheme = { $isDarkTheme: boolean };

const Button = styled.button<isDarkTheme>`
  position: relative;
  height: 20px;
  width: 32px;
  align-self: center;
  border-radius: 10px;
  border: none;
  background-color: ${({ $isDarkTheme }) => ($isDarkTheme ? Color.PRIMARY : Color.SECONDARY_LIGHT)};
  transition: background-color 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${({ $isDarkTheme }) => ($isDarkTheme ? Color.PRIMARY : Color.SECONDARY_LIGHT)};
  }
`;

const SwitchRound = styled.div<isDarkTheme>`
  position: absolute;
  top: 2px;
  left: ${({ $isDarkTheme }) => ($isDarkTheme ? "2px" : "14px")};
  height: 16px;
  width: 16px;
  background-color: ${Color.WHITE};
  border-radius: 50%;
  transition: left 0.5s;
`;

export { Button, SwitchRound };
