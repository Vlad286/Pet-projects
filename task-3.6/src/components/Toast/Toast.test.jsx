import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Toast from "./Toast";

describe("Toast component", () => {
  const onCloseMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the toast with the correct message", () => {
    render(<Toast message="Success! Your operation was completed." type="success" onClose={onCloseMock} />);

    const toast = screen.getByText("Success! Your operation was completed.");
    expect(toast).toBeInTheDocument();
  });

  test("renders the toast with the correct type", () => {
   render(<Toast message="Success! Your operation was completed." type="success" onClose={onCloseMock} />);
   const toast = screen.getByText("Success! Your operation was completed.");
   
   expect(toast).toBeInTheDocument();
 });
 

  test("calls onClose after the duration", async () => {
    render(<Toast message="Success! Your operation was completed." type="success" duration={2000} onClose={onCloseMock} />);

    expect(screen.getByText("Success! Your operation was completed.")).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText("Success! Your operation was completed.")).not.toBeInTheDocument(), { timeout: 3000 });

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("does not call onClose until duration has passed", async () => {
    render(<Toast message="Success! Your operation was completed." type="success" duration={3000} onClose={onCloseMock} />);

    expect(onCloseMock).not.toHaveBeenCalled();

    await waitFor(() => expect(screen.queryByText("Success! Your operation was completed.")).toBeInTheDocument(), { timeout: 3500 });

    await waitFor(() => expect(onCloseMock).toHaveBeenCalledTimes(1), { timeout: 5500 });
  });

  test("does not render toast when isVisible is false", async () => {
    render(<Toast message="Success! Your operation was completed." type="success" duration={0} onClose={onCloseMock} />);

    await waitFor(() => expect(screen.queryByText("Success! Your operation was completed.")).not.toBeInTheDocument(), { timeout: 100 });
  });
});
