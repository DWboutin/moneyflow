import React from "react";
import { render, RenderResult } from "@testing-library/react";

import Nav from "../Nav";
import TestWrapper from "../../../utils/TestWrapper";

describe("<Nav />", () => {
  let renderResult: RenderResult;

  const renderNav = () => {
    renderResult = render(
      <TestWrapper>
        <Nav />
      </TestWrapper>
    );
  };

  describe("default rendering", () => {
    beforeEach(() => {
      renderNav();
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });
});
