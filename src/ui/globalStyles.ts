import { createGlobalStyle } from "styled-components";
import { themeColors } from "./theme";

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
    font-family: 'Inter', sans-serif;
}
ul,li{
    text-decoration: none;
    list-style: none;
}
input,button{
    border: 0;
    background: transparent;
}
a,
a:focus,
a:active {
    outline: none;
    color: inherit;
    text-decoration: none;
  }
${themeColors}
   
`;
