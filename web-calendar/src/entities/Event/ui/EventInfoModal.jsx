import React from "react";
import Modal from "@ui-kit/Modal/Modal";
import IconImage from "@ui-kit/Icons/IconImage";
import { iconList } from "@ui-kit/Icons/IconListImage";

const EventInfoModal = ({
  isOpen,
  onClose,
  event,
  calendars,
  onEdit,
  onDelete,
}) => {
  if (!isOpen || !event) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="modal-content">
        <div className="modal_info_event-header">
          <h3 className="modal_info_event-header-title">Event Information</h3>
          <div className="modal_info_event-header-btns">
            <button
              className="modal_info_event-header-btn"
              onClick={() => onEdit(event)}
            >
              <IconImage src={iconList[22].src} alt={iconList[22].alt} />
            </button>
            <button
              className="modal_info_event-header-btn"
              onClick={() => onDelete(event)}
            >
              <IconImage src={iconList[12].src} alt={iconList[12].alt} />
            </button>
          </div>
        </div>
        <div className="modal_info_event-form-group">
          <IconImage src={iconList[25].src} alt={iconList[25].alt} />
          <p className="modal_info_event-form-group-text">{event.title}</p>
        </div>
        <div className="modal_info_event-form-group">
          <IconImage src={iconList[26].src} alt={iconList[26].alt} />
          <p className="modal_info_event-form-group-text">
            {new Date(event.date).toDateString()}
            <br />
            {event.time.start} - {event.time.end}
          </p>
        </div>
        <div className="modal_info_event-form-group">
          <IconImage src={iconList[27].src} alt={iconList[27].alt} />
          <p className="modal_info_event-form-group-text">
            {calendars.find((cal) => cal.id === event.calendar)?.name}
          </p>
        </div>
        <div className="modal_info_event-form-group">
          <IconImage src={iconList[28].src} alt={iconList[28].alt} />
          <p className="modal_info_event-form-group-text">
            {event.description}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default EventInfoModal;
