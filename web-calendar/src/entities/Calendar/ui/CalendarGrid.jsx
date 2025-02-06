import React, { useEffect, useState } from "react";
import "./CalendarGrid.scss";

const CalendarGrid = ({
  currentDate,
  selectedDate,
  onDateChange,
  setStartAndEndOfWeek,
}) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [startOfWeek, setStartOfWeek] = useState(getStartOfWeek(selectedDate));
  const [endOfWeek, setEndOfWeek] = useState(null);
  const [days, setDays] = useState([]);

  function getStartOfWeek(date) {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay());
    return start;
  }

  useEffect(() => {
    const start = getStartOfWeek(currentDate);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);

    setStartOfWeek(start);
    setEndOfWeek(end);

    setStartAndEndOfWeek({ start, end });
  }, [currentDate]);

  useEffect(() => {
    setStartOfWeek(getStartOfWeek(selectedDate));
  }, [selectedDate]);

  useEffect(() => {
    const preparedDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      preparedDays.push({
        date,
        dayNumber: date.getDate(),
        dayName: daysOfWeek[date.getDay()],
        isSelected: selectedDate.toDateString() === date.toDateString(),
      });
    }
    setDays(preparedDays);
  }, [startOfWeek, selectedDate]);

  return (
    <div className="calendar_grid">
      <div className="calendar_grid_body">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar_grid_day ${day.isSelected ? "selected" : ""}`}
            onClick={() => onDateChange(day.date)}
          >
            <span className="calendar_grid_day-number">{day.dayNumber}</span>
            <span className="calendar_grid_day-name">{day.dayName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
