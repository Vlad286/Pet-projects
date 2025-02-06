import React from "react";
import EventInfoModal from "./EventInfoModal";
import EditEventModal from "./EditEventModal";
import DeleteEventModal from "./DeleteEventModal"
import { useEventLogic } from "../model/useEventLogic";
import { calculateEventStyles } from "../../../shared/utils/CalculateEventStyles";
import "./RenderEvent.scss";

const RenderEvent = ({
  events = [],
  setEvents,
  calendars = [],
  startOfWeek,
  endOfWeek,
}) => {
  const {
    selectedEvent,
    openEventModal,
    closeEventModal,
    openEditModal,
    newCalendarEvent,
    setNewCalendarEvent,
    isEditEventModalOpen,
    closeEditEventModal,
    handleSaveEditedEvent,
    isDatePickerOpen,
    setIsDatePickerOpen,
    isDeleteModalOpen,
    openDeleteModal,
    closeDeleteModal,
    confirmDeleteEvent,
    isInfoModalOpen,
  } = useEventLogic(events, setEvents, calendars);
  

  const adjustedEndOfWeek = new Date(endOfWeek);
  adjustedEndOfWeek.setHours(23, 59, 59, 999);

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const isInRange =
      eventDate >= startOfWeek && eventDate <= adjustedEndOfWeek;
    return isInRange;
  });

  return (
    <>
      {filteredEvents.map((event) => (
        <button
          key={event.id}
          className="event"
          style={calculateEventStyles(event, startOfWeek, calendars)}
          onClick={() => openEventModal(event)}
        >
          <strong>{event.title}</strong>
          <p>
            {event.time?.start} - {event.time?.end}
          </p>
          <p>{event.description}</p>
        </button>
      ))}

      <EventInfoModal
        isOpen={isInfoModalOpen}
        onClose={closeEventModal}
        event={selectedEvent}
        calendars={calendars}
        onEdit={openEditModal}
        onDelete={openDeleteModal}
      />
      <EditEventModal
        isOpen={isEditEventModalOpen}
        onClose={closeEditEventModal}
        event={newCalendarEvent}
        setEvent={setNewCalendarEvent}
        calendars={calendars}
        onSave={handleSaveEditedEvent}
        isDatePickerOpen={isDatePickerOpen}
        setIsDatePickerOpen={setIsDatePickerOpen}
      />
      <DeleteEventModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        event={selectedEvent}
        onDelete={confirmDeleteEvent}
      />
    </>
  );
};

export default RenderEvent;
