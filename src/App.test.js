import React from "react";

import { render } from "@testing-library/react";

import App from "./App";

const Render = () => {
  return ({} = render(<App />));
};

describe("App ", () => {
  it("렌더링 된다.", () => {
    Render();
  });
});
