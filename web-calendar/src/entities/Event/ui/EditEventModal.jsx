import React from "react";
import Modal from "@ui-kit/Modal/Modal";
import TextArea from "@ui-kit/TextArea/TextArea";
import SelectMenu from "@ui-kit/SelectMenu/SelectMenu";
import CustomSelect from "../../../shared/components/CustomSelect";
import Button from "@ui-kit/Button/Button";
import DatePicker from "@ui-kit/DatePicker/DatePicker";

const Time = [
  { value: "00:00", label: "12:00 AM" },
  { value: "01:00", label: "1:00 AM" },
  { value: "02:00", label: "2:00 AM" },
  { value: "03:00", label: "3:00 AM" },
  { value: "04:00", label: "4:00 AM" },
  { value: "05:00", label: "5:00 AM" },
  { value: "06:00", label: "6:00 AM" },
  { value: "07:00", label: "7:00 AM" },
  { value: "08:00", label: "8:00 AM" },
  { value: "09:00", label: "9:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
  { value: "13:00", label: "1:00 PM" },
  { value: "14:00", label: "2:00 PM" },
  { value: "15:00", label: "3:00 PM" },
  { value: "16:00", label: "4:00 PM" },
  { value: "17:00", label: "5:00 PM" },
  { value: "18:00", label: "6:00 PM" },
  { value: "19:00", label: "7:00 PM" },
  { value: "20:00", label: "8:00 PM" },
  { value: "21:00", label: "9:00 PM" },
  { value: "22:00", label: "10:00 PM" },
  { value: "23:00", label: "11:00 PM" },
];

const EditEventModal = ({
  isOpen,
  onClose,
  event,
  setEvent,
  calendars,
  onSave,
  isDatePickerOpen,
  setIsDatePickerOpen,
}) => {
  return (
    <div className="modal_wrapper">
      <Modal
        className="modal"
        isOpen={isOpen}
        onClose={onClose}
      >
        <h3 className="modal_edit_event-header">Edit Event</h3>
        <div className="modal_edit_event-body">
          {/* Title */}
          <div className="modal_edit_event-form-group">
            <label className="modal_edit_event-form-group-title">Title</label>
            <input
              className="modal_edit_event-form-group_input"
              type="text"
              value={event.title}
              onChange={(e) =>
                setEvent({
                  ...event,
                  title: e.target.value,
                })
              }
            />
          </div>

          {/* DatePicker */}
          <div className="modal_edit_event-form-group-date-time">
            <div className="modal_edit_event-form-group-date-time-counter">
              <label className="modal_edit_event-form-group-title">Date</label>
              <label className="modal_edit_event-form-group-title">Time</label>
            </div>
            <div className="modal_edit_event-form-group-date-time-counter">
              <div
                className="modal_edit_event-form-datepicker"
                onClick={() => setIsDatePickerOpen((prev) => !prev)}
              ></div>
              <input
                className="modal_edit_event-form-group-date_input"
                type="text"
                readOnly
                value={event.date || "Select a date"}
                onClick={() => setIsDatePickerOpen((prev) => !prev)}
              />
              {isDatePickerOpen && (
                <div className="datepicker-overlay">
                  <DatePicker
                    className="custom-datepicker"
                    onDateChange={(date) => {
                      const formattedDate = `${date.getFullYear()}-${String(
                        date.getMonth() + 1
                      ).padStart(2, "0")}-${String(date.getDate()).padStart(
                        2,
                        "0"
                      )}`;

                      setEvent({
                        ...event,
                        date: formattedDate,
                      });

                      setIsDatePickerOpen(false);
                    }}
                  />
                </div>
              )}
              <SelectMenu
                options={Time}
                placeholderStart="Select start time"
                placeholderEnd="Select end time"
                onChange={(startTime, endTime) =>
                  setEvent((prev) => ({
                    ...prev,
                    time: { start: startTime, end: endTime },
                  }))
                }
              />
            </div>
          </div>

          {/* Calendar */}
          <div className="modal_edit_event-form-group">
            <label className="modal_edit_event-form-group-title">Calendar</label>
            <CustomSelect
              options={calendars}
              value={event.calendar}
              placeholder="Select a calendar"
              onChange={(selectedId) =>
                setEvent({
                  ...event,
                  calendar: selectedId,
                })
              }
            />
          </div>

          {/* Description */}
          <div className="modal_edit_event-form-group">
            <TextArea
              value={event.description}
              placeholder="Enter event description..."
              maxLength={300}
              onChange={(description) => setEvent({ ...event, description })}
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="modal_delete_btns">
          <Button label="Save" variant="primary" onClick={onSave} />
        </div>
      </Modal>
    </div>
  );
};

export default EditEventModal;
