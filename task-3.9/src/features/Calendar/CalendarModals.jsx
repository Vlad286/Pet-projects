import React from "react";
import CreateModal from "./CreateModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const CalendarModals = ({
  isModalOpen,
  closeModal,
  newCalendar,
  setNewCalendar,
  handleSaveCalendar,
  isEditModalOpen,
  closeEditModal,
  editCalendar,
  setEditCalendar,
  handleEditCalendar,
  isDeleteModalOpen,
  closeDeleteModal,
  calendarToDelete,
  handleDeleteCalendar,
}) => {
  return (
    <>
      <CreateModal
        isOpen={isModalOpen}
        onClose={closeModal}
        newCalendar={newCalendar}
        setNewCalendar={setNewCalendar}
        onSave={handleSaveCalendar}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        editCalendar={editCalendar}
        setEditCalendar={setEditCalendar}
        onSave={handleEditCalendar}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        calendarToDelete={calendarToDelete}
        onDelete={handleDeleteCalendar}
      />
    </>
  );
};

export default CalendarModals;
