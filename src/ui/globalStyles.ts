import { createGlobalStyle } from "styled-components";

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
}
a,
a:focus,
a:active {
    outline: none;
    color: inherit;
    text-decoration: none;
  }
`;
