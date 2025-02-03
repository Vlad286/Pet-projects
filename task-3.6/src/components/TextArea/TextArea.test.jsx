import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextArea from "./TextArea";

describe("TextArea component", () => {
  const mockOnChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders with default props", () => {
    render(<TextArea />);

    const textarea = screen.getByPlaceholderText("Введите текст...");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveValue("");
    expect(screen.getByText("0/200")).toBeInTheDocument();
  });

  test("renders with custom props", () => {
    render(<TextArea value="Initial value" placeholder="Custom placeholder" rows={6} maxLength={1000} />);
  
    const textarea = screen.getByPlaceholderText("Custom placeholder");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveValue("Initial value");
    
    expect(screen.getByText(/13\/1000/)).toBeInTheDocument()
  });
  
  test("calls onChange when typing in the textarea", () => {
    render(<TextArea onChange={mockOnChange} />);

    const textarea = screen.getByPlaceholderText("Введите текст...");
    fireEvent.change(textarea, { target: { value: "New text" } });

    expect(mockOnChange).toHaveBeenCalledWith("New text");
    expect(textarea).toHaveValue("New text");
    expect(screen.getByText("8/200")).toBeInTheDocument();
  });

  test("does not call onChange when value is the same", () => {
    render(<TextArea value="Same value" onChange={mockOnChange} />);

    const textarea = screen.getByPlaceholderText("Введите текст...");
    fireEvent.change(textarea, { target: { value: "Same value" } });

    expect(mockOnChange).not.toHaveBeenCalled()
  });
});
