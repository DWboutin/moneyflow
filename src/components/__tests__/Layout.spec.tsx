import React from "react";
import { render, RenderResult } from "@testing-library/react";

import Layout, { Props } from "../Layout";

describe("<Layout />", () => {
  let renderResult: RenderResult;

  const renderLayout = ({ children }: Props) => {
    renderResult = render(<Layout>{children}</Layout>);
  };

  describe("default rendering", () => {
    beforeEach(() => {
      renderLayout({ children: "Content" });
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });
});
