import React from "react";
import { render, RenderResult } from "@testing-library/react";

import Card, { Props } from "../Card";
import TestWrapper from "../../../utils/TestWrapper";

describe("<Card />", () => {
  let renderResult: RenderResult;

  const renderCard = ({ children }: Props) => {
    renderResult = render(
      <TestWrapper>
        <Card>{children}</Card>
      </TestWrapper>
    );
  };

  describe("default rendering", () => {
    beforeEach(() => {
      renderCard({ children: "Content" });
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });
});
