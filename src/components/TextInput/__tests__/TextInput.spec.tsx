import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";

import TextInput, { Props } from "../TextInput";
import TestWrapper from "../../../utils/TestWrapper";

describe("<TextInput />", () => {
  let renderResult: RenderResult;

  const mockOnChange = jest.fn();
  const renderTextInput = ({
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
        <TextInput
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
      renderTextInput({
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
      renderTextInput({
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
      renderTextInput({
        id: "id",
        name: "name",
        label: "Label",
        placeholder: "Placeholder",
        value: "",
        handleOnChange: mockOnChange,
      });

      fireEvent.change(
        renderResult.container.querySelector("input") as HTMLTextAreaElement,
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
