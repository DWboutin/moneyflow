import React from "react";
import { render, RenderResult } from "@testing-library/react";

import BoxIcons, { Props } from "../BoxIcons";

describe("<BoxIcons />", () => {
  let renderResult: RenderResult;

  const renderBoxIcons = ({
    name,
    type,
    size,
    rotate,
    flip,
    fixedWidth,
    pull,
    bordered,
    circle,
    animation,
    animationOnHover,
    className,
  }: Props) => {
    renderResult = render(
      <BoxIcons
        name={name}
        type={type}
        size={size}
        rotate={rotate}
        flip={flip}
        fixedWidth={fixedWidth}
        pull={pull}
        bordered={bordered}
        circle={circle}
        animation={animation}
        animationOnHover={animationOnHover}
        className={className}
      />
    );
  };

  describe("default rendering", () => {
    beforeEach(() => {
      renderBoxIcons({
        name: "bitcoin",
      });
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });

  describe("with all props provided", () => {
    beforeEach(() => {
      renderBoxIcons({
        name: "bitcoin",
        type: "solid",
        size: "large",
        rotate: "90",
        flip: "vertical",
        fixedWidth: true,
        pull: "right",
        bordered: true,
        circle: true,
        animation: "tada",
        animationOnHover: true,
        className: "classname-prop",
      });
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });
});
