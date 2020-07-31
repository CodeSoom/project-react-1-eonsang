import React from "react";
import { render } from "@testing-library/react";

import Wrapper from "./Wrapper";

describe("<Wrapper />", () => {
  it("렌더링 된다.", () => {
    render(<Wrapper />);
  });
});
