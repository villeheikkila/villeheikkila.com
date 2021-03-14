import { createCss } from "@stitches/react";

const sizeScale = {
  sm: "0.5rem",
  md: "1rem",
  lg: "2rem",
  xlg: "4rem",
};

export const { styled, css, global, getCssString, theme } = createCss({
  theme: {
    colors: {
      black: "black",
      gray500: "hsl(206,10%,76%)",
      blue500: "hsl(206,100%,50%)",
      purple500: "hsl(252,78%,60%)",
      green500: "hsl(148,60%,60%)",
      red500: "hsl(352,100%,62%)",
    },
    sizes: sizeScale,
    space: sizeScale,
    fontSizes: {
      xxlg: "2rem",
      xlg: "1.5rem",
      lg: "1.25rem",
      md: "1rem",
      sm: "0.875rem",
      xs: "0.75rem",
    },
    fonts: {
      untitled: "Untitled Sans, apple-system, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {
      light: "300",
      regular: "400",
      medium: "500",
      bold: "700",
    },
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  conditions: { bp1: `@media (max-width: 640px)` },
});

export const applyGlobalCSS = global({
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
    margin: "0",
    padding: "0",
    border: "0",
    fontSize: "100%",
    font: "inherit",
    verticalAlign: "baseline",
  },
  "*": {
    boxSizing: "border-box",
  },
  "article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section": {
    display: "block",
  },
  "*[hidden]": {
    display: "none",
  },
  input: {
    border: "none",
  },
  select: {
    border: "none",
    appearance: "none",
    "-webkit-appearance": "none",
  },
  body: {
    lineHeight: "1",
    backgroundColor: "rgb(38, 37, 48)",
  },
  button: {
    padding: "0",
    border: "0",
    backgroundColor: "inherit",
  },
  "ol, ul": {
    listStyle: "none",
  },
  "blockquote, q": {
    quotes: "none",
  },
  "blockquote:before, blockquote:after, q:before, q:after": {
    content: "",
  },
  table: {
    borderSpacing: "0",
  },
});
