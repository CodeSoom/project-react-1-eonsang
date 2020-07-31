import React from "react";

import { render } from "@testing-library/react";

import Calendar from "./Calendar";

describe("<Calendar />", () => {
  it("렌더링 된다.", () => {
    render(<Calendar />);
  });
});
