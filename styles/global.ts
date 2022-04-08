import { createGlobalStyle } from "styled-components";

import { localFonts } from "./fonts";
import { reset } from "./reset";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  ${localFonts};
  ${reset};

  :root {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.light};
    line-height: ${theme.lineHeights.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.heading};
  }
`;
