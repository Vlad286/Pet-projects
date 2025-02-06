import React from "react";
import Modal from "@ui-kit/Modal/Modal";
import Button from "@ui-kit/Button/Button";
import ColorPicker from "@ui-kit/ColorPicker/ColorPicker";

const EditModal = ({
  isOpen,
  onClose,
  editCalendar,
  setEditCalendar,
  onSave,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="modal_edit_header">Edit calendar</h3>
      <div className="modal_edit_body">
        <div className="modal_edit_form-group">
          <label className="modal_edit_form-group-title">Title</label>
          <input
            className="modal_edit_form-group_input"
            type="text"
            placeholder="Enter title"
            value={editCalendar?.title || ""}
            onChange={(e) =>
              setEditCalendar({ ...editCalendar, title: e.target.value })
            }
          />
        </div>
        <div className="modal_edit_form-group">
          <label className="modal_edit_form-group-title">Color</label>
          <ColorPicker
            colors={[
              "#FF5733",
              "#33FF57",
              "#3357FF",
              "#FF33A1",
              "#A133FF",
              "#33FFF5",
              "#FFC733",
              "#FF8E33",
              "#FF33B2",
              "#57FF33",
              "#3371FF",
              "#FF3357",
              "#8E44AD",
            ]}
            onSelectColor={(color) =>
              setEditCalendar({ ...editCalendar, color })
            }
          />
        </div>
      </div>
      <footer className="modal_edit_btns">
        <Button
          className="modal_edit_btns-save-btn"
          label="Save"
          variant="primary"
          onClick={onSave}
        />
      </footer>
    </Modal>
  );
};

export default EditModal;
