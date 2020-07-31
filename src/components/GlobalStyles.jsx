import React from "react";

import { Global, css } from "@emotion/core";
import emotionReset from "emotion-reset";

const initialStyle = css`
  ${emotionReset}

  html, body {
    background: #efefef;
  }

  hidden {
    display: none;
  }
`;
export default function GlobalStyle() {
  return <Global styles={initialStyle} />;
}
