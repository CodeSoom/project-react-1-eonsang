import React from "react";

import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import Navigation from "./Navigation";

const renderComponent = () => {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <Navigation />
    </MemoryRouter>
  );
};

describe("<Navigation />", () => {
  it("링크가 있다.", () => {
    const linkArray = ["일기장", "캘린더", "글쓰기", "지도", "마이페이지"];

    const { getByText } = renderComponent();

    linkArray.forEach((link) => {
      expect(getByText(link)).not.toBeNull();
    });
  });
});
