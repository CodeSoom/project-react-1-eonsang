import React from "react";

import { render } from "@testing-library/react";

import Write from "./Write";

describe("<Write />", () => {
  it("렌더링 된다.", () => {
    render(<Write />);
  });
});
