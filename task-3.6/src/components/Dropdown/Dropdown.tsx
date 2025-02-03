import React from "react";
import { useState } from "react";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  days: string[];
  onSelectDay: (day: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ days, onSelectDay }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelectDay = (day: string) => {
    onSelectDay(day);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdown_btn} onClick={toggleDropdown}>
        Select Day
      </button>
      {isOpen && (
        <ul className={styles.dropdown_list}>
          {days.map((day, index) => (
            <li key={index} className={styles.dropdown_list_item} onClick={() => handleSelectDay(day)}>
              {day}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
