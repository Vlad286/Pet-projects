import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

describe("Form Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("должен успешно отправляться при валидных данных", async () => {
    render(<Form />);
    const usernameInput = screen.getByPlaceholderText("Enter your username");
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const passwordInputs = screen.getAllByPlaceholderText(
      "Enter your password"
    );
    const passwordInput = passwordInputs[0];
    const confirmPasswordInput = passwordInputs[1];
    const submitButton = screen.getByText("Submit");

    fireEvent.change(usernameInput, { target: { value: "JohnDoe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password123" },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.queryByText("Username is required")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Please enter a valid email address")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Please enter your password")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Passwords don't match")
      ).not.toBeInTheDocument();
    });

    expect(submitButton).toBeDisabled();
  });

  test("должен отображать ошибку при некорректном email", async () => {
    render(<Form />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.queryByText((content) =>
          content.includes("Please enter an email")
        )
      ).toBeInTheDocument();
    });
  });

  test("должен отображать ошибки при несовпадении паролей", async () => {
    render(<Form />);
    const passwordInputs = screen.getAllByPlaceholderText(
      "Enter your password"
    );
    const passwordInput = passwordInputs[0];
    const confirmPasswordInput = passwordInputs[1];
    const submitButton = screen.getByText("Submit");

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "password456" },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Passwords don't match")).toBeInTheDocument();
    });
  });

  test("должен переключать видимость пароля", () => {
    render(<Form />);
    const toggleButtons = screen.getAllByAltText("Open eye icon");
    const passwordInput = screen.getAllByPlaceholderText(
      "Enter your password"
    )[0];

    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(toggleButtons[0]);

    expect(passwordInput).toHaveAttribute("type", "text");
  });
});
