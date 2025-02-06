import React from "react";
import Modal from "@ui-kit/Modal/Modal";
import Button from "@ui-kit/Button/Button";

const DeleteEventModal = ({ isOpen, onClose, event, onDelete }) => {
  return (
    isOpen && (
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="modal-content">
          <h3 className="modal_delete_event-header">Confirm Deletion</h3>

          <div className="modal_delete_event_body">
            <p className="modal_delete_event_body-text">
              Are you sure you want to delete the event{" "}
              <strong>{event?.title}</strong>? This action cannot be undone.
            </p>
          </div>

          <div className="modal_delete_event-btns">
            <Button
              className="modal_delete_event-btns-cancel-btn"
              label="Cancel"
              variant="secondary"
              onClick={onClose}
            />
            <Button
              className="delete-confirm-button"
              label="Delete"
              variant="primary"
              onClick={onDelete}
            />
          </div>
        </div>
      </Modal>
    )
  );
};

export default DeleteEventModal;
