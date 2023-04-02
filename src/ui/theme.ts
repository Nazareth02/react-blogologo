import { css } from "styled-components";

const themeColors = css`
  html[theme="light"] {
    --theme-header: #ffffff;
    --theme-bg: #f3f3f3;
    --theme-btn: #e0dfe0;
    --theme-text: #313037;
    --theme-footerText: rgba(49, 48, 55, 0.5);
    --theme-navMenu: #e0dfe0;
  }
  html[theme="dark"] {
    --theme-header: rgba(255, 255, 255, 0.1);
    --theme-bg: #313037;
    --theme-btn: rgba(255, 255, 255, 0.1);
    --theme-text: #ffffff;
    --theme-footerText: rgba(255, 255, 255, 0.5);
    --theme-navMenu: rgba(97, 95, 103, 1);
  }
`;

export { themeColors };
