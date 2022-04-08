import "styled-components";
import * as CSS from "csstype";

type StandardCSSProperties = CSS.Properties<number | string>;
type Empty = undefined | null | false;
type TLengthStyledSystem = string | 0 | number;
type ResponsiveStyleValue<T> = T | Empty | Array<T | Empty>;

interface CSSProperties
  extends CSS.StandardProperties<number | string>,
    CSS.SvgProperties<number | string>,
    CSS.VendorProperties<number | string> {}

type Scale<T> = T[] | ScaleDict<T>;

interface ScaleDict<T> {
  [K: string]: T | T[] | undefined;
  [I: number]: T;
}

type Breakpoints = "xs" | "sm" | "md" | "lg" | "xl";
type CommonColors = "transparent" | "black" | "white";
type ExtendedColors =
  | CommonColors
  | "blue"
  | "blueGray"
  | "blueLight"
  | "brown"
  | "cyan"
  | "gray"
  | "green"
  | "greenLight"
  | "indigo"
  | "lime"
  | "orange"
  | "orangeDeep"
  | "pink"
  | "purple"
  | "purpleDeep"
  | "red"
  | "teal"
  | "yellow";

type FontFamilies = "heading" | "body" | "monospace";
type FontWeights = "light" | "regular" | "medium" | "bold";
type LineHeights = "body" | "heading";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      [name in Breakpoints]: string;
    };
    colors: Record<ExtendedColors, string>;
    fonts: Record<FontFamilies, CSS.Property.FontFamily>;
    fontSizes: Scale<CSS.Property.FontSize<number>>;
    fontWeights: Record<FontWeights, CSS.Property.FontWeight>;
    lineHeights: Record<
      LineHeights,
      CSS.Property.LineHeight<TLengthStyledSystem>
    >;
    radii: Scale<CSS.Property.BorderRadius<TLengthStyledSystem>>;
    sizes: Scale<CSS.Property.Height<{}> | CSS.Property.Width<{}>>;
    space: Scale<CSS.Property.Margin<number | string>>;
    zIndices: Scale<CSS.Property.ZIndex>;
  }
}
