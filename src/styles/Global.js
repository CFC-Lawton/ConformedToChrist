import * as React from "react"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root{
    --border-radius: 4px;
    --color-text: #fff;
    --color-primary: #7026b9;
    --color-code-bg: #000000;
    --color-code: #8a6534;
    --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    --font-mono: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --font-lg: 18px;
    --font-md: 16px;
    --font-sm: 14px;
    --font-sx: 12px;
    --line-height-loose: 1.75;
    --line-height-normal: 1.5;
    --line-height-dense: 1.1;
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 16px;
    --space-4: 24px;
    --space-5: 32px;
    --space-6: 64px;
    --size-content: 54rem;
    --size-gutter: var(--space-5);
    --size-gap: var(--space-6);
  }
  
  html {
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    font: sans-serif;
    font-size: var(--font-md);
    line-height: var(--line-height-normal);
    overflow-y: scroll;
  }
  
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: var(--color-text);
    font-family: sans-serif;
    font-family: var(--font-sans);
    font-weight: normal;
    margin: 0;
    word-wrap: break-word;
  }
  
  img{
    width:100%;
  }
  
  
  `

export default GlobalStyle;
