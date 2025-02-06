import React, { useState } from "react";
import styles from "./CustomSelect.module.scss";
import IconImage from "@ui-kit/Icons/IconImage";
import { iconList } from "@ui-kit/Icons/IconListImage";

const CustomSelect = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option.id);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.id === value);

  return (
    <div className={styles.customSelect}>
      <div
        className={`${styles.customSelectControl} ${
          selectedOption ? styles.active : styles.placeholder
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? (
          <div className={styles.selectedOption}>
            <span
              className={styles.colorBox}
              style={{ backgroundColor: selectedOption.color }}
            />
            {selectedOption.name}
          </div>
        ) : (
          placeholder || "Select a calendar"
        )}
        <IconImage src={iconList[24].src} alt={iconList[24].alt} />
      </div>
      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map((option) => (
            <li
              key={option.id}
              className={styles.option}
              onClick={() => handleOptionClick(option)}
            >
              <span
                className={styles.colorBox}
                style={{ backgroundColor: option.color }}
              />
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
