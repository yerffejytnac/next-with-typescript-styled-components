import { DefaultTheme } from "styled-components";

import { getBreakpoints } from "./breakpoints";
import colors from "./colors";
import { monoFonts, systemFonts } from "./fonts";

export const theme: DefaultTheme = {
  breakpoints: getBreakpoints(),
  colors,
  fonts: {
    body: `${systemFonts}`,
    heading: `Moderat, ${systemFonts}`,
    monospace: `${monoFonts}`,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
};
