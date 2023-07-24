import type { Breakpoints, Colors, Fonts } from "../types/theme";

export const breakpoints: Breakpoints = {
  base: 0,
  xs: 400,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  "3xl": 1600,
};

export const colors: Colors = {
  primary: "#0F2534",
  primaryLighten: "#29465C",

  secoundary: "#5EC4DB",

  accent: "#E973A7",
  accentLighten: "#FF9B3C",

  white: "#FFFDF6",

  textPrimary: "#fff",
};

export const fonts: Fonts = {
  size: "16px",
};

const theme = {
  breakpoints,
  colors,
  fonts,
};

export default theme;
