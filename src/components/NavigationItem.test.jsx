import React from "react";

import { MemoryRouter } from "react-router-dom";

import { render } from "@testing-library/react";

import NavigationItem from "./NavigationItem";

describe("<NavigationItem />", () => {
  it("렌더링 된다.", () => {
    const data = {
      link: "/",
      title: "일기장",
      icon: <></>,
    };

    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <NavigationItem data={data} />
      </MemoryRouter>
    );

    expect(getByText("일기장")).not.toBeNull();
  });
});
