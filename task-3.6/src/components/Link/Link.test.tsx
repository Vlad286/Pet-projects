import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import Link from "./Link";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

describe("Link component", () => {
  const renderLink = (props: { to: string; label: string; isDisabled?: boolean }) => {
    return render(
      <BrowserRouter>
        <Link {...props} />
      </BrowserRouter>
    );
  };

  it("should render the link with the correct label", () => {
    renderLink({ to: "/home", label: "Home" });
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("should have correct 'href' value when not disabled", () => {
    renderLink({ to: "/home", label: "Home" });
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/home"); 
  });

  it("should have correct 'href' value when disabled", () => {
    renderLink({ to: "/home", label: "Home", isDisabled: true });
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });

  it("should not navigate when clicked and disabled", () => {
    renderLink({ to: "/home", label: "Home", isDisabled: true });
    const link = screen.getByText("Home");
    fireEvent.click(link);
    expect(window.location.pathname).not.toBe("/home");
  });

  it("should navigate when clicked and not disabled", () => {
    renderLink({ to: "/home", label: "Home" });
    const link = screen.getByText("Home");
    fireEvent.click(link);
    expect(window.location.pathname).toBe("/home");
  });
});
