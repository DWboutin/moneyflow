import React from "react";
import { render, RenderResult } from "@testing-library/react";

import Button, { Props } from "../Button";
import TestWrapper from "../../../utils/TestWrapper";

describe("<Button />", () => {
  let renderResult: RenderResult;

  const renderButton = ({ children, type }: Props) => {
    renderResult = render(
      <TestWrapper>
        <Button type={type}>{children}</Button>
      </TestWrapper>
    );
  };

  describe("default rendering", () => {
    beforeEach(() => {
      renderButton({ children: "Button label" });
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });

  describe("type='submit'", () => {
    beforeEach(() => {
      renderButton({ children: "Button label", type: "submit" });
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });
});
