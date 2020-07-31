import React from "react";

import { render } from "@testing-library/react";

import Home from "./Home";

describe("<Home />", () => {
  it("렌더링 된다.", () => {
    render(<Home />);
  });
});
