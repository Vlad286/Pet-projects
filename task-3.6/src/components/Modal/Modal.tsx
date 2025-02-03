import React, { useEffect } from "react";
import styles from "./Modul.module.scss";
import IconImage from "../Icons/IconImage";
import { iconList } from "../Icons/IconListImage";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.modal_overlay}
      data-testid="modal-overlay"
      onClick={onClose}
    >
      <div
        className={`${styles.modal_content} ${className || ""}`}
        data-testid="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.modal_close}
          onClick={onClose}
          aria-label="Close"
        >
          <IconImage src={iconList[16].src} alt={iconList[16].alt} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
