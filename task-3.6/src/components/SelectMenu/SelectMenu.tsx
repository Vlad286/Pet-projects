import React, { useState } from "react";
import styles from "./SelectMenu.module.scss";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectMenuProps {
  options: SelectOption[];
  onChange: (startTime: string, endTime: string) => void;
  placeholderStart?: string;
  placeholderEnd?: string;
}

const SelectMenu: React.FC<SelectMenuProps> = ({
  options,
  onChange,
  placeholderStart,
  placeholderEnd,
}) => {
  const [selectedStartTime, setSelectedStartTime] = useState<string | null>(
    null
  );
  const [selectedEndTime, setSelectedEndTime] = useState<string | null>(null);
  const [isOpenStart, setIsOpenStart] = useState(false);
  const [isOpenEnd, setIsOpenEnd] = useState(false);

  const handleStartTimeClick = (value: string) => {
    setSelectedStartTime(value);
    setIsOpenStart(false);
    onChange(value, selectedEndTime || "");
  };

  const handleEndTimeClick = (value: string) => {
    setSelectedEndTime(value);
    setIsOpenEnd(false);
    onChange(selectedStartTime || "", value);
  };

  return (
    <div className={styles.select_menu_wrapper}>
      <div className={styles.select_menu}>
        <div className={styles.select_menu}>
          <div className={styles.select_menu}>
            <div
              className={styles.select_menu_control}
              onClick={() => setIsOpenStart((prev) => !prev)}
            >
              <span
                className={
                  selectedStartTime ? styles.selected_time : styles.default_time
                }
              >
                {selectedStartTime
                  ? options.find((option) => option.value === selectedStartTime)
                      ?.label
                  : placeholderStart || "Select start time"}
              </span>
            </div>
            {isOpenStart && (
              <ul className={styles.select_menu_options}>
                {options.map((option) => (
                  <li
                    key={option.value}
                    className={styles.select_menu_option}
                    onClick={() => handleStartTimeClick(option.value)}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {isOpenStart && (
            <ul className={styles.select_menu_options}>
              {options.map((option) => (
                <li
                  key={option.value}
                  className={styles.select_menu_option}
                  onClick={() => handleStartTimeClick(option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {isOpenStart && (
          <ul className={styles.select_menu_options}>
            {options.map((option) => (
              <li
                key={option.value}
                className={styles.select_menu_option}
                onClick={() => handleStartTimeClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.select_menu}>
        <div
          className={styles.select_menu}
          onClick={() => setIsOpenEnd((prev) => !prev)}
        >
          <div className={styles.select_menu_control}>
            <span
              className={
                selectedEndTime ? styles.selected_time : styles.default_time
              }
            >
              {selectedEndTime
                ? options.find((option) => option.value === selectedEndTime)
                    ?.label
                : placeholderEnd || "Select end time"}
            </span>
          </div>
          {isOpenEnd && (
            <ul className={styles.select_menu_options}>
              {options.map((option) => (
                <li
                  key={option.value}
                  className={styles.select_menu_option}
                  onClick={() => handleEndTimeClick(option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {isOpenEnd && (
          <ul className={styles.select_menu_options}>
            {options.map((option) => (
              <li
                key={option.value}
                className={styles.select_menu_option}
                onClick={() => handleEndTimeClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SelectMenu;
