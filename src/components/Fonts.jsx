import React from "react";
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* Font face JetBrains Mono */
      @font-face {
        font-family: "JetBrains Mono";
        font-style: normal;
        font-display: swap;
        font-weight: 100 400;
        src: url("/fonts/jetbrains-mono/jetbrains-mono-regular.woff2") format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* Font face JetBrains Mono */
      @font-face {
        font-family: "JetBrains Mono";
        font-style: italic;
        font-display: swap;
        font-weight: 100 400;
        src: url("/fonts/jetbrains-mono/jetbrains-mono-italic.woff2") format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* Font face Inter var */
      @font-face {
        font-family: 'Inter var';
        font-weight: 100 900;
        font-display: swap;
        font-style: normal;
        font-named-instance: 'Regular';
        src: url("/fonts/inter/Inter.var.woff2") format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);

export default Fonts;
