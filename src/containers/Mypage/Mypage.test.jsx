import React from "react";

import { render } from "@testing-library/react";

import Mypage from "./Mypage";

describe("<Mypage />", () => {
  it("렌더링 된다.", () => {
    render(<Mypage />);
  });
});
