import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";

import NavLink, { Props } from "../NavLink";
import TestWrapper from "../../../utils/TestWrapper";

describe("<NavLink />", () => {
  let renderResult: RenderResult;

  const mockOnClick = jest.fn();
  const renderNavLink = ({ to, icon, iconType, label, onClick }: Props) => {
    renderResult = render(
      <TestWrapper>
        <NavLink
          to={to}
          icon={icon}
          iconType={iconType}
          label={label}
          onClick={onClick}
        />
      </TestWrapper>
    );
  };

  describe("default rendering", () => {
    beforeEach(() => {
      renderNavLink({
        to: "/",
        icon: "dashboard",
        iconType: "solid",
        label: "Link",
        onClick: () => {},
      });
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });

  describe("on click", () => {
    beforeEach(() => {
      renderNavLink({
        to: "/",
        icon: "dashboard",
        iconType: "solid",
        label: "Link",
        onClick: mockOnClick,
      });

      fireEvent(
        renderResult.container.firstChild as HTMLAnchorElement,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });

    it("should have execute onClick handler", () => {
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});
