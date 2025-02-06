import React from "react";
import Modal from "@ui-kit/Modal/Modal";
import Button from "@ui-kit/Button/Button";
import ColorPicker from "@ui-kit/ColorPicker/ColorPicker";

const CreateModal = ({
  isOpen,
  onClose,
  newCalendar,
  setNewCalendar,
  onSave,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="modal_add_header">Create calendar</h3>
      <div className="modal_add_body">
        <div className="modal_add_form-group">
          <label className="modal_add_form-group-title">Title</label>
          <input
            className="modal_add_form-group_input"
            type="text"
            placeholder="Enter title"
            value={newCalendar.title}
            onChange={(e) =>
              setNewCalendar({ ...newCalendar, title: e.target.value })
            }
          />
        </div>
        <div className="modal_add_form-group">
          <label className="modal_form_group-title">Color</label>
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
              "#8E44AD"
            ]}
            onSelectColor={(color) => setNewCalendar({ ...newCalendar, color })}
          />
        </div>
      </div>
      <footer className="modal_add_btn">
        <Button
          className="modal_add_btn-save-btn"
          label="Save"
          variant="primary"
          onClick={onSave}
        />
      </footer>
    </Modal>
  );
};

export default CreateModal;
