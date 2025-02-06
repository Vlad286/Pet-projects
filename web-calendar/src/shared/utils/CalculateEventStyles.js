const rowHeight = 60;

export const calculateEventStyles = (event, startOfWeek, calendars) => {
  if (!event || !event.date || !startOfWeek) {
    console.error("Missing required parameters in calculateEventStyles:", {
      event,
      startOfWeek,
    });
    return {};
  }

  const eventDate = new Date(event.date);
  const dayOffset =
    Math.floor((eventDate - startOfWeek) / (1000 * 60 * 60 * 24)) + 2;

  const [startHour, startMinute] = (event.time?.start || "00:00")
    .split(":")
    .map(Number);
  const [endHour, endMinute] = (event.time?.end || "00:00")
    .split(":")
    .map(Number);

  if (
    isNaN(startHour) ||
    isNaN(startMinute) ||
    isNaN(endHour) ||
    isNaN(endMinute)
  ) {
    console.error("Invalid time format in event:", event.time);
    return {};
  }

  const startPosition = (startHour * 60 + startMinute) * (rowHeight / 60);
  const eventHeight =
    (endHour * 60 + endMinute - (startHour * 60 + startMinute)) *
    (rowHeight / 60);

  if (eventHeight < 0) {
    console.warn("Event height is negative. Check start and end time:", event);
  }

  const calendar = calendars.find((cal) => cal.id === event.calendar);
  const backgroundColor = calendar?.color || "#ccc";

  if (!calendar) {
    console.warn("Calendar not found for event:", event.calendar);
  }

  return {
    gridColumnStart: dayOffset,
    gridColumnEnd: dayOffset + 1,
    top: `${startPosition}px`,
    height: `${Math.max(eventHeight, 0)}px`,
    backgroundColor,
  };
};
