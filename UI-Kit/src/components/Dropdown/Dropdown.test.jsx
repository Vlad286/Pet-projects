import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  const days = ["Monday", "Tuesday", "Wednesday"];
  const mockOnSelectDay = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("должен отображать кнопку и не показывать список по умолчанию", () => {
    render(<Dropdown days={days} onSelectDay={mockOnSelectDay} />);

    const button = screen.getByText("Select Day");
    expect(button).toBeInTheDocument();

    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });

  test("должен открывать список при нажатии на кнопку", () => {
    render(<Dropdown days={days} onSelectDay={mockOnSelectDay} />);

    const button = screen.getByText("Select Day");

    fireEvent.click(button);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(days.length);
    expect(listItems[0]).toHaveTextContent("Monday");
    expect(listItems[1]).toHaveTextContent("Tuesday");
    expect(listItems[2]).toHaveTextContent("Wednesday");
  });

  test("должен закрывать список и вызывать onSelectDay при выборе элемента", () => {
    render(<Dropdown days={days} onSelectDay={mockOnSelectDay} />);

    const button = screen.getByText("Select Day");

    fireEvent.click(button);

    const firstItem = screen.getByText("Monday");
    fireEvent.click(firstItem);

    expect(mockOnSelectDay).toHaveBeenCalledWith("Monday");
    expect(mockOnSelectDay).toHaveBeenCalledTimes(1);

    const list = screen.queryByRole("list");
    expect(list).not.toBeInTheDocument();
  });
});
