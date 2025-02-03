import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectMenu from "./SelectMenu";

describe("SelectMenu component", () => {
  const mockOnChange = jest.fn();
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with placeholder when no option is selected", () => {
    render(<SelectMenu options={options} onChange={mockOnChange} placeholder="Select an option" />);

    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  test("displays options when clicked", () => {
    render(<SelectMenu options={options} onChange={mockOnChange} placeholder="Select an option" />);

    const control = screen.getByText("Select an option");
    fireEvent.click(control);

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  test("hides options when clicked again", () => {
    render(<SelectMenu options={options} onChange={mockOnChange} placeholder="Select an option" />);

    const control = screen.getByText("Select an option");
    fireEvent.click(control);
    fireEvent.click(control);

    options.forEach((option) => {
      expect(screen.queryByText(option.label)).not.toBeInTheDocument();
    });
  });

  test("selects an option and calls onChange", () => {
    render(<SelectMenu options={options} onChange={mockOnChange} placeholder="Select an option" />);

    const control = screen.getByText("Select an option");
    fireEvent.click(control);

    const optionToSelect = screen.getByText("Option 2");
    fireEvent.click(optionToSelect);

    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(mockOnChange).toHaveBeenCalledWith("2");
  });

  test("does not call onChange when the same option is clicked twice", () => {
    render(<SelectMenu options={options} onChange={mockOnChange} placeholder="Select an option" />);

    const control = screen.getByText("Select an option");
    fireEvent.click(control);

    const optionToSelect = screen.getByText("Option 2");
    fireEvent.click(optionToSelect);
    fireEvent.click(optionToSelect);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
