import React from "react";
import Button from "@ui-kit/Button/Button";
import DatePicker from "@ui-kit/DatePicker/DatePicker";
import IconImage from "@ui-kit/Icons/IconImage";
import Checkbox from "@ui-kit/Checkbox/Checkbox";
import ColorPicker from "@ui-kit/ColorPicker/ColorPicker";
import { iconList } from "@ui-kit/Icons/IconListImage";

const Sidebar = ({
  selectedDate,
  calendars,
  onDateChange,
  openCreateModal,
  openModal,
  setCalendars,
  openEditModal,
  openDeleteModal,
}) => {
  return (
    <aside className="calendar__sidebar">
      <header className="calendar__sidebar-header">
        <h1 className="calendar__sidebar-header-title">WebCalendar</h1>
        <Button
          label="Today"
          variant="primary"
          className="calendar__today-btn"
          onClick={() => onDateChange(new Date())}
        />
      </header>
      <Button
        className="create_btn"
        label="Create"
        variant="primary"
        onClick={openCreateModal}
      />

      <section className="calendar__datepicker">
        <DatePicker selectedDate={selectedDate} onDateChange={onDateChange} />
      </section>

      <section className="calendar__calendars">
        <div className="calendar__calendars_info">
          <h3 className="calendar__calendars_info-title">My calendars</h3>
          <button className="calendar__calendars_info-btn" onClick={openModal}>
            <IconImage src={iconList[9].src} alt={iconList[9].alt} />
          </button>
        </div>
        <ul className="calendar__calendars_area">
          {calendars.map((calendar) => (
            <li key={calendar.id} className="calendar__calendars_item">
              <Checkbox
                checked={calendar.selected}
                onChange={() =>
                  setCalendars(
                    calendars.map((c) =>
                      c.id === calendar.id ? { ...c, selected: !c.selected } : c
                    )
                  )
                }
              />
              <span
                className="calendar__color"
                style={{ backgroundColor: calendar.color }}
              ></span>
              <span className="calendar_name">{calendar.name}</span>
              <button
                className="calendar__edit-btn"
                onClick={() => openEditModal(calendar)}
              >
                <IconImage
                  className="icons"
                  src={iconList[22].src}
                  alt="Edit"
                />
              </button>
              <button
                className="calendar__delete-btn"
                onClick={() => openDeleteModal(calendar)}
              >
                <IconImage src={iconList[12].src} alt="Delete" />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
