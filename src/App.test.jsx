import React from "react";

import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import App from "./App";

const Render = () => {
  return ({} = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ));
};

describe("<App /> ", () => {
  it("렌더링 된다.", () => {
    Render();
  });
});
