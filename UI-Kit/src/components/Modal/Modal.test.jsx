import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Modal from "./Modal";

describe("Modal component", () => {
  const onCloseMock = jest.fn();
  const modalContent = <div>Test Content</div>;

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders nothing when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={onCloseMock}>
        {modalContent}
      </Modal>
    );

    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });

  test("renders modal content when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        {modalContent}
      </Modal>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("calls onClose when clicking on the overlay", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        {modalContent}
      </Modal>
    );

    fireEvent.click(screen.getByTestId("modal-overlay"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when clicking on the overlay", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        {modalContent}
      </Modal>
    );
  
    fireEvent.click(screen.getByTestId("modal-overlay"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
  
  test("does not close modal when clicking inside modal content", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        {modalContent}
      </Modal>
    );
  
    fireEvent.click(screen.getByTestId("modal-content"));
    expect(onCloseMock).not.toHaveBeenCalled();
  });
});
