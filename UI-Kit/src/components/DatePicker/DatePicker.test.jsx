import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DatePicker from "./DatePicker";
import { iconList } from "../Icons/IconListImage";

jest.mock("../Icons/IconListImage", () => {
  return {
    iconList: [
      { src: 'path-to-left-arrow', alt: 'Arrow Left' },
      { src: 'path-to-right-arrow', alt: 'Arrow Right' },
      { src: 'path-to-other-icon', alt: 'Other Icon' },
    ]
  };
});



describe("DatePicker", () => {
  test("renders DatePicker with current month and year", () => {
    render(<DatePicker />);

    const currentMonthYear = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
    });

    const currentMonthYearElement = screen.getByText(currentMonthYear);
    expect(currentMonthYearElement).toBeInTheDocument();
  });

  test("renders days of the week correctly", () => {
    render(<DatePicker />);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    daysOfWeek.forEach((day) => {
      const dayElement = screen.getByText(day);
      expect(dayElement).toBeInTheDocument();
    });
  });


  test("selects a date when a day is clicked", () => {
    render(<DatePicker />);

    const allDateButtons = screen.getAllByText("1");

    const firstDateButton = allDateButtons.find(
      (button) => !button.classList.contains("inactive")
    );

    fireEvent.click(firstDateButton);

    const selectedDateButton = screen.getAllByText("1");
    expect(selectedDateButton[0]).toHaveClass("selected");
  });

  test("does not change selected date if the same date is clicked again", () => {
    render(<DatePicker />);

    const allDateButton = screen.getAllByText("1");

    const firstDateButton = allDateButton.find(
      (button) => !button.classList.contains("inactive")
    );

    fireEvent.click(firstDateButton);
    fireEvent.click(firstDateButton);

    expect(firstDateButton).toHaveClass("selected");
  });
});
