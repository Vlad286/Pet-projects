import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ColorPicker from "./ColorPicker";

describe("ColorPicker", () => {
  const colors = ["#FF0000", "#00FF00", "#0000FF"];
  const onSelectColorMock = jest.fn();

  test("renders with a default message when no color is selected", () => {
    render(<ColorPicker colors={colors} onSelectColor={onSelectColorMock} />);
    const defaultText = screen.getByText("Select a color");
    expect(defaultText).toBeInTheDocument();
  });

  test("calls onSelectColor with the correct color when a color is clicked", () => {
    render(<ColorPicker colors={colors} onSelectColor={onSelectColorMock} />);

    const redColorButton = screen.getByTestId("color-button-0");
    fireEvent.click(redColorButton);

    expect(onSelectColorMock).toHaveBeenCalledWith("#FF0000");
  });

  test("displays the selected color", () => {
    render(<ColorPicker colors={colors} onSelectColor={onSelectColorMock} />);

    const greenColorButton = screen.getByTestId("color-button-1");
    fireEvent.click(greenColorButton);

    const selectedColorText = screen.getByText("Selected: #00FF00");
    expect(selectedColorText).toBeInTheDocument();
  });

  test("shows the correct selected color when clicked", () => {
    render(<ColorPicker colors={colors} onSelectColor={onSelectColorMock} />);

    const blueColorButton = screen.getByTestId("color-button-2");
    fireEvent.click(blueColorButton);

    const selectedColorDiv = screen.getByText("Selected: #0000FF");
    expect(selectedColorDiv).toBeInTheDocument();
  });

  test("does not call onSelectColor when the same color is clicked again", () => {
    render(<ColorPicker colors={colors} onSelectColor={onSelectColorMock} />);

    const redColorButton = screen.getByTestId("color-button-0");
    fireEvent.click(redColorButton);

    fireEvent.click(redColorButton);

    expect(onSelectColorMock).toHaveBeenCalledTimes(4);
  });
});
