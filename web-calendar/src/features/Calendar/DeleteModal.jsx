import React from "react";
import Modal from "@ui-kit/Modal/Modal";
import Button from "@ui-kit/Button/Button";

const DeleteModal = ({ isOpen, onClose, calendarToDelete, onDelete }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="modal_delete_header">Delete calendar</h3>
      <div className="modal_delete_body">
        <p className="modal_delete_body-text">
          Are you sure you want to delete{" "}
          <strong>{calendarToDelete?.name}</strong>? You’ll no longer have access to this
          calendar and its events.
        </p>
      </div>
      <footer className="modal_delete_btns">
        <Button
          className="modal_delete_btns-cancel-btn"
          label="Cancel"
          variant="secondary"
          onClick={onClose}
        />
        <Button
          className="modal_delete_btns-delete-btn"
          label="Delete"
          variant="primary"
          onClick={onDelete}
        />
      </footer>
    </Modal>
  );
};

export default DeleteModal;
