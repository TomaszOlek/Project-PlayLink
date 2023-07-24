import { CSSProperties } from "styled-components";

export type Breakpoint =
  | "base"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "3xl";
export type Breakpoints = Record<Breakpoint, number>;

export type Colors = {
  primary: CSSProperties["color"];
  primaryLighten: CSSProperties["color"];

  secoundary: CSSProperties["color"];

  accent: CSSProperties["color"];
  accentLighten: CSSProperties["color"];

  white: CSSProperties["color"];

  textPrimary: CSSProperties["color"];
};

export type Fonts = {
  size: `${number}px`;
};
