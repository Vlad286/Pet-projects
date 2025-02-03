import React, { useState } from "react";
import "./Calendar.scss";
import CalendarGrid from "../../entities/Calendar/ui/CalendarGrid";
import TimeGrid from "../../entities/Calendar/ui/TimeGrid";
import Toast from "@ui-kit/Toast/Toast";
import { useCalendarLogic } from "../../entities/Calendar/model/useCalendarLogic";
import { useEventLogic } from "../../entities/Event/model/useEventLogic";
import Sidebar from "../Sidebar/Sidebar";
import CreateEventModal from "../../entities/Event/ui/CreateEventModal";
import CalendarModals from "./CalendarModals";

const Calendar = () => {
  const {
    selectedDate,
    calendars,
    currentDate,
    isModalOpen,
    newCalendar,
    isEditModalOpen,
    editCalendar,
    isDeleteModalOpen,
    calendarToDelete,
    openModal,
    closeModal,
    openEditModal,
    closeEditModal,
    handleEditCalendar,
    openDeleteModal,
    closeDeleteModal,
    handleDeleteCalendar,
    handleSaveCalendar,
    handleDateChange,
    setCalendars,
    setNewCalendar,
    setEditCalendar,
    toast,
  } = useCalendarLogic();

  const {
    events,
    setEvents,
    isCreateModalOpen,
    openCreateModal,
    closeCreateModal,
    handleSaveEvent,
    newCalendarEvent,
    setNewCalendarEvent,
    isDatePickerOpen,
    setIsDatePickerOpen,
  } = useEventLogic(calendars);

  const [startAndEndOfWeek, setStartAndEndOfWeek] = useState({
    start: null,
    end: null,
  });

  return (
    <div className="calendar">
      <Sidebar
        selectedDate={selectedDate}
        calendars={calendars}
        onDateChange={handleDateChange}
        openCreateModal={openCreateModal}
        openModal={openModal}
        setCalendars={setCalendars}
        openEditModal={openEditModal}
        openDeleteModal={openDeleteModal}
      />
      <CreateEventModal
        isCreateModalOpen={isCreateModalOpen}
        closeCreateModal={closeCreateModal}
        newCalendarEvent={newCalendarEvent}
        setIsDatePickerOpen={setIsDatePickerOpen}
        setNewCalendarEvent={setNewCalendarEvent}
        isDatePickerOpen={isDatePickerOpen}
        calendars={calendars}
        handleSaveEvent={handleSaveEvent}
      />

      <CalendarModals
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        newCalendar={newCalendar}
        setNewCalendar={setNewCalendar}
        handleSaveCalendar={handleSaveCalendar}
        isEditModalOpen={isEditModalOpen}
        closeEditModal={closeEditModal}
        editCalendar={editCalendar}
        setEditCalendar={setEditCalendar}
        handleEditCalendar={handleEditCalendar}
        isDeleteModalOpen={isDeleteModalOpen}
        closeDeleteModal={closeDeleteModal}
        calendarToDelete={calendarToDelete}
        handleDeleteCalendar={handleDeleteCalendar}
      />

      <main className="calendar__main">
        <CalendarGrid
          currentDate={currentDate}
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
          setStartAndEndOfWeek={setStartAndEndOfWeek} 
        />

        {startAndEndOfWeek.start && startAndEndOfWeek.end && (
          <TimeGrid
            events={events}
            setEvents={setEvents}
            calendars={calendars}
            startOfWeek={startAndEndOfWeek.start}
            endOfWeek={startAndEndOfWeek.end}
          />
        )}
        {toast && (
          <Toast message={toast.message} type={toast.type} onClose={() => {}} />
        )}
      </main>
    </div>
  );
};

export default Calendar;
