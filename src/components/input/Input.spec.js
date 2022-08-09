import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Input from "./Input";

describe("Input Component", () => {
  const props = {
    type: "text",
    name: "Username",
    id: "username",
    label: "Test Input",
    placeholderText: "Enter Here",
    hasError: false,
    handleChange: jest.fn(),
    handleBlur: jest.fn(),
  };

  describe("input attributes", () => {
    test("error message does not show if hasError is false", () => {
      render(<Input {...props} />);
      expect(screen.queryByRole("paragraph", { hidden: true })).toBeFalsy();
    });
    test("error message shows if hasError is true", () => {
      render(<Input type="text" hasError={true} error="Something missing" />);
      expect(screen.getByText("Something missing")).toBeInTheDocument();
    });
    test("label does not show if omitted", () => {
      render(<Input type="text" hasError={false} />);
      expect(screen.queryByLabelText("Test Input")).toBeFalsy();
    });
    test("label shows if added", () => {
      render(<Input {...props} />);
      expect(screen.getByLabelText("Test Input")).toBeTruthy();
    });
    test("placeholder text does not show if omitted", () => {
      render(<Input type="text" hasError={false} />);
      expect(screen.queryByPlaceholderText("Enter Here")).toBeFalsy();
    });
    test("placeholder text shows if added", () => {
      render(<Input {...props} />);
      expect(screen.getByPlaceholderText("Enter Here")).toBeTruthy();
    });
  });

  describe("change and blur events", () => {
    test("handle change is called when change is made in field", () => {
      render(<Input {...props} />);
      const input = screen.getByLabelText("Test Input");
      fireEvent.change(input, { target: { value: "Hello World" } });
      expect(input.value).toBe("Hello World");
    });
    test("not allow letters to be entered in number input field", () => {
      render(
        <Input type="number" id="phoneno" label="test" hasError={false} />
      );
      const input = screen.getByLabelText("test");
      fireEvent.change(input, { target: { value: "Hello World" } });
      expect(input.value).toBe("");
    });
  });
});
