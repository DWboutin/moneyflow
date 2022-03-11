import React from "react";
import { fireEvent, render, RenderResult, act } from "@testing-library/react";

import DateInput, { Props } from "../DateInput";
import TestWrapper from "../../../utils/TestWrapper";

describe("<DateInput />", () => {
  let renderResult: RenderResult;

  const renderDateInput = ({
    id,
    name,
    label,
    placeholder,
    handleOnChange,
    error,
  }: Props) => {
    renderResult = render(
      <TestWrapper>
        <DateInput
          id={id}
          name={name}
          label={label}
          placeholder={placeholder}
          handleOnChange={handleOnChange}
          error={error}
        />
      </TestWrapper>
    );
  };

  const mockOnChange = jest.fn();

  describe("default rendering", () => {
    beforeEach(() => {
      renderDateInput({
        id: "id",
        name: "name",
        label: "Input label",
        placeholder: "Date placeholder",
        handleOnChange: mockOnChange,
      });
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });

  describe("with error", () => {
    beforeEach(() => {
      renderDateInput({
        id: "id",
        name: "name",
        label: "Input label",
        placeholder: "Date placeholder",
        handleOnChange: mockOnChange,
        error: "Input error",
      });
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });

  describe("when clicking the input", () => {
    beforeEach(async () => {
      renderDateInput({
        id: "id",
        name: "name",
        label: "Input label",
        placeholder: "Date placeholder",
        handleOnChange: mockOnChange,
      });
      fireEvent(
        renderResult.container.querySelector("input") as HTMLInputElement,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      await act(async () => await null); // from github issue https://github.com/floating-ui/floating-ui/issues/1520
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });

    it("should the date picker be rendered", async () => {
      expect(
        renderResult.container.querySelector(".react-datepicker__tab-loop")
      ).not.toBe(null);
    });

    it("should execute handleOnChange when changing date", () => {
      fireEvent(
        renderResult.container.querySelector(
          ".react-datepicker__tab-loop .react-datepicker__week .react-datepicker__day:first-child"
        ) as HTMLInputElement,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      expect(mockOnChange).toHaveBeenCalled();
    });
  });
});
