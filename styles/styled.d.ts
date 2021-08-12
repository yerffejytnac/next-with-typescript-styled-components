import "styled-components";
import * as CSS from "csstype";

type StandardCSSProperties = CSS.Properties<number | string>;
type Empty = undefined | null | false;
type TLengthStyledSystem = string | 0 | number;

type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl";
type CommonColors = "transparent" | "black" | "white";
type ExtendedColors =
  | CommonColors
  | "blue"
  | "cyan"
  | "fuschia"
  | "gray"
  | "green"
  | "indigo"
  | "lime"
  | "orange"
  | "pink"
  | "red"
  | "teal"
  | "violet"
  | "yellow";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      [name in Breakpoints]: string;
    };
    colors: Record<ExtendedColors, string>;
    fonts: Scale<CSS.Property.FontFamily>;
    fontSizes: Scale<CSS.Property.FontSize<number>>;
    fontWeights: Scale<CSS.Property.FontWeight>;
    lineHeights: Scale<CSS.Property.LineHeight<TLengthStyledSystem>>;
    space: Scale<CSS.Property.Margin<number | string>>;
  }
}
