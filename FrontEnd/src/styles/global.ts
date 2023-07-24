import { css, createGlobalStyle } from "styled-components";

import normalize from "./normalize";

const Global = css`
  * {
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  html {
    font-size: ${({ theme }) => theme.fonts.size};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  body {
    font-family: sans-serif;
  }

  html,
  body,
  #root {
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0px;
    padding: 0px;
    font-family: sans-serif;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const GlobalStyles = createGlobalStyle`
    ${normalize}
    ${Global} 
`;

export default GlobalStyles;
