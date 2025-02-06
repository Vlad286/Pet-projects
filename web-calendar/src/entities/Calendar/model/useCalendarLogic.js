import { useState } from "react";

export const useCalendarLogic = () => {
  const [calendars, setCalendars] = useState([
    { id: 1, name: "Calendar 1", color: "#ffc107", selected: true },
  ]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCalendar, setNewCalendar] = useState({ title: "", color: "" });
  const [editCalendar, setEditCalendar] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [calendarToDelete, setCalendarToDelete] = useState(null);
  const [toast, setToast] = useState(null);


  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setNewCalendar({ title: "", color: "#007bff" });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditModal = (calendar) => {
    setEditCalendar(calendar);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditCalendar(null);
  };

  const openDeleteModal = (calendar) => {
    setCalendarToDelete(calendar);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setCalendarToDelete(null);
  };

  const handleDateChange = (date) => {
    setSelectedDate(new Date(date));
    setCurrentDate(new Date(date));
  };

  const handleEditCalendar = () => {
    if (!editCalendar.title || !editCalendar.color) {
      alert("Please fill in all required fields.");
      return;
    }
    setCalendars(
      calendars.map((c) =>
        c.id === editCalendar.id
          ? { ...c, name: editCalendar.title, color: editCalendar.color }
          : c
      )
    );
    showToast("Calendar edited successfully!", "success");
    closeEditModal();
  };

  const handleSaveCalendar = () => {
    if (!newCalendar.title || !newCalendar.color) {
      alert("Please enter a title and select a color.");
      return;
    }
    setCalendars([
      ...calendars,
      {
        id: Date.now(),
        name: newCalendar.title,
        color: newCalendar.color,
        selected: true,
      },
    ]);
    showToast("Calendar created successfully!", "success");
    closeModal();
  };

  const handleDeleteCalendar = () => {
    if (calendarToDelete) {
      setCalendars(calendars.filter((c) => c.id !== calendarToDelete.id));
      showToast("Calendar deleted successfully!", "info");
    }
    closeDeleteModal();
  };


  return {
    selectedDate,
    calendars,
    currentDate,
    isModalOpen,
    newCalendar,
    isEditModalOpen,
    editCalendar,
    openEditModal,
    closeEditModal,
    isDeleteModalOpen,
    calendarToDelete,
    setCurrentDate,
    openModal,
    closeModal,
    handleSaveCalendar,
    openDeleteModal,
    closeDeleteModal,
    handleDeleteCalendar,
    setCalendars,
    setNewCalendar,
    setEditCalendar,
    handleDateChange,
    handleEditCalendar,
    showToast,
    toast,
  };
};
