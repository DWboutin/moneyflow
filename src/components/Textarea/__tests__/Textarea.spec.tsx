import React from "react";
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from "@testing-library/react";

import Textarea, { Props } from "../Textarea";
import TestWrapper from "../../../utils/TestWrapper";

describe("<Textarea />", () => {
  let renderResult: RenderResult;

  const mockOnChange = jest.fn();
  const renderTextarea = ({
    id,
    name,
    label,
    placeholder,
    value,
    handleOnChange,
    error,
  }: Props) => {
    renderResult = render(
      <TestWrapper>
        <Textarea
          id={id}
          name={name}
          label={label}
          placeholder={placeholder}
          value={value}
          handleOnChange={handleOnChange}
          error={error}
        />
      </TestWrapper>
    );
  };

  describe("default rendering", () => {
    beforeEach(() => {
      renderTextarea({
        id: "id",
        name: "name",
        label: "Label",
        placeholder: "Placeholder",
        value: "",
        handleOnChange: mockOnChange,
      });
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });

  describe("with error", () => {
    beforeEach(() => {
      renderTextarea({
        id: "id",
        name: "name",
        label: "Label",
        placeholder: "Placeholder",
        value: "Value",
        handleOnChange: mockOnChange,
        error: "Has an error",
      });
    });

    it("should match snapshot", () => {
      expect(renderResult.container).toMatchSnapshot();
    });
  });

  describe("on change", () => {
    beforeEach(() => {
      renderTextarea({
        id: "id",
        name: "name",
        label: "Label",
        placeholder: "Placeholder",
        value: "",
        handleOnChange: mockOnChange,
      });

      fireEvent.change(
        renderResult.container.querySelector("textarea") as HTMLTextAreaElement,
        {
          target: { value: "New value" },
        }
      );
    });

    it("should execute handleOnChange", async () => {
      expect(mockOnChange).toHaveBeenCalled();
    });
  });
});
