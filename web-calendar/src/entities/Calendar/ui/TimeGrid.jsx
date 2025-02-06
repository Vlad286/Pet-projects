import React from "react";
import "./TimeGrid.scss";
import RenderEvent from "../../Event/ui/RenderEvent";

const TimeGrid = ({ events, setEvents, calendars, startOfWeek, endOfWeek }) => {
  const hours = [
    "12 AM",
    "1 AM",
    "2 AM",
    "3 AM",
    "4 AM",
    "5 AM",
    "6 AM",
    "7 AM",
    "8 AM",
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ];

  return (
    <div className="time-grid">
      {hours.map((hour, index) => (
        <div key={index} className="time-grid__hour">
          {hour}
        </div>
      ))}

      <RenderEvent
        events={events}
        setEvents={setEvents}
        calendars={calendars}
        startOfWeek={startOfWeek}
        endOfWeek={endOfWeek}
      />
    </div>
  );
};

export default TimeGrid;
