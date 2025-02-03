import { useState } from "react";
import { useEvents } from "./EventsContext";


export const useEventLogic = () => {
  const { events, setEvents } = useEvents();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isEditEventModalOpen, setIsEditEventModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [newCalendarEvent, setNewCalendarEvent] = useState({
    title: "",
    date: "",
    time: {
      start: "",
      end: "",
    },
    days: "",
    calendar: "",
    description: "",  
  });

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
    setNewCalendarEvent({
      title: "",
      date: "",
      time: {
        start: "",
        end: "",
      },
      days: "",
      calendar: "",
      description: "",
    });
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleSaveEvent = () => {
    if (
      !newCalendarEvent.title ||
      !newCalendarEvent.date ||
      !newCalendarEvent.time.start ||
      !newCalendarEvent.time.end
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const normalizedDate = newCalendarEvent.date;

    const newEvent = {
      id: Date.now(),
      ...newCalendarEvent,
      date: normalizedDate,
    };

    setEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, newEvent];
      return updatedEvents;
    });

    closeCreateModal();
  };

  const handleEditEvent = () => {
    if (
      !newCalendarEvent.title ||
      !newCalendarEvent.date ||
      !newCalendarEvent.time.start ||
      !newCalendarEvent.time.end
    ) {
      alert("Please fill in all required fields.");
      return;
    }


    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event) =>
        event.id === selectedEvent.id
          ? { ...event, ...newCalendarEvent }
          : event
      );
      return updatedEvents;
    });

    closeEventModal();
  };

  const openEditEventModal = () => {
    setIsEditEventModalOpen(true);
  };

  const closeEditEventModal = () => {
    setIsEditEventModalOpen(false);
  };

  const handleSaveEditedEvent = () => {
    if (!selectedEvent || !selectedEvent.id) {
      return;
    }

    if (
      !newCalendarEvent.title ||
      !newCalendarEvent.date ||
      !newCalendarEvent.time.start ||
      !newCalendarEvent.time.end
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setEvents((prevEvents) => {
      if (!prevEvents || prevEvents.length === 0) {
        return prevEvents;
      }

      const updatedEvents = prevEvents.map((event) =>
        event.id === selectedEvent.id
          ? { ...event, ...newCalendarEvent }
          : event
      );
      return updatedEvents;
    });

    closeEditEventModal();
  };

  const openEventModal = (event) => {
    if (!event) {
      return;
    }
    setSelectedEvent(event);
    setIsInfoModalOpen(true);
  };

  const closeEventModal = () => {
    setIsInfoModalOpen(false);
  };

  const openEditModal = (event) => {
    if (!event) {
      return;
    }

    setNewCalendarEvent({
      title: event.title,
      date: event.date,
      time: event.time,
      days: event.days || "",
      calendar: event.calendar,
      description: event.description || "",
    });

    setSelectedEvent(event);
    closeEventModal();
    setIsEditEventModalOpen(true);
  };

  const openDeleteModal = () => {
    closeEventModal();
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const confirmDeleteEvent = () => {
    if (!selectedEvent || !selectedEvent.id) {
      return;
    }

    setEvents(events.filter((event) => event.id !== selectedEvent.id));
    closeDeleteModal();
    closeEventModal();
  };

  return {
    events,
    setEvents,
    selectedEvent,
    isEditModalOpen,
    isCreateModalOpen,
    isEditEventModalOpen,
    newCalendarEvent,
    isDatePickerOpen,
    isDeleteModalOpen,
    openDeleteModal,
    closeDeleteModal,
    confirmDeleteEvent,
    isInfoModalOpen,
    openCreateModal,
    setIsDatePickerOpen,
    setSelectedEvent,
    setNewCalendarEvent,
    setIsEditEventModalOpen,
    closeCreateModal,
    openEditEventModal,
    closeEditEventModal,
    handleSaveEvent,
    openEventModal,
    closeEventModal,
    openEditModal,
    handleEditEvent,
    setNewCalendarEvent,
    handleSaveEditedEvent,
  };
};
