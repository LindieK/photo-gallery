import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./Button";

describe("Button component", () => {
  const props = {
    text: "Test Button",
    handleClick: jest.fn(),
  };

  describe("by default", () => {
    test("should show text passed", () => {
      render(<Button {...props} text="Test Button" />);
      expect(screen.getByText("Test Button")).toBeInTheDocument();
    });

    test("should not be disabled", () => {
      render(<Button {...props} />);
      expect(screen.getByText("Test Button")).toBeEnabled();
    });

    test("should render primary button", () => {
      expect(render(<Button {...props} />)).toMatchSnapshot();
    });
  });

  describe("button attributes", () => {
    test("should disable button if disabled prop is present", () => {
      render(<Button {...props} disabled={true} />);
      expect(screen.getByRole("button")).toBeDisabled();
    });

    test("should set size according to prop passed", () => {
      render(<Button {...props} size="1em" />);
      expect(screen.getByRole("button")).toHaveStyle("font-size: 1em");
    });

    test("should show secondary button when secondary prop", () => {
      render(<Button {...props} secondary={true} />);
      expect(screen.getByRole("button")).toHaveStyle(
        "background-color: transparent"
      );
    });
  });

  describe("click event", () => {
    test("should call function on click", () => {
      const onClick = jest.fn();
      render(<Button {...props} handleClick={onClick} />);
      fireEvent.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    test("should not call function when button is disabled", () => {
      const onClick = jest.fn();
      render(<Button {...props} handleClick={onClick} disabled={true} />);
      fireEvent.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(0);
    });
  });
});
