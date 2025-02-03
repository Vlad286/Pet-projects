import React, { useState } from "react";
import styles from "./DatePicker.module.scss";
import IconImage from "../Icons/IconImage";
import { iconList } from "../Icons/IconListImage";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface DatePickerProps {
  onDateChange: (date: Date) => void;
  className?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ onDateChange, className }) => {
  const [currentDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<number>(
    currentDate.getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    currentDate.getFullYear()
  );
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const handleDateSelect = (day: number) => {
    setSelectedDate(day);
    const newDate = new Date(currentYear, currentMonth, day);
    onDateChange(newDate);
  };

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDateOfMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();
    const lastDayOfMonth = new Date(
      currentYear,
      currentMonth,
      lastDateOfMonth
    ).getDay();
    const lastDateOfLastMonth = new Date(
      currentYear,
      currentMonth,
      0
    ).getDate();

    const days = [];

    for (let i = firstDayOfMonth; i > 0; i--) {
      days.push(
        <li key={`prev-${i}`} className={styles.inactive}>
          {lastDateOfLastMonth - i + 1}
        </li>
      );
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday =
        i === currentDate.getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear();

      const isSelected = i === selectedDate;

      days.push(
        <li
          key={i}
          className={`${styles.day} ${isToday ? styles.today : ""} ${
            isSelected ? styles.selected : ""
          }`}
          onClick={() => handleDateSelect(i)}
        >
          {i}
        </li>
      );
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      days.push(
        <li key={`next-${i}`} className={styles.inactive}>
          {i - lastDayOfMonth + 1}
        </li>
      );
    }

    return days;
  };

  const handlePrevClick = () => {
    const prevMonth = currentMonth - 1;
    if (prevMonth < 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(prevMonth);
    }
  };

  const handleNextClick = () => {
    const nextMonth = currentMonth + 1;
    if (nextMonth > 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(nextMonth);
    }
  };

  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
      <header className={styles.header}>
        <p
          className={styles.current_date}
        >{`${months[currentMonth]} ${currentYear}`}</p>
        <div className={styles.icons}>
          <button onClick={handlePrevClick}>
            <IconImage src={iconList[5]?.src} alt={iconList[3]?.alt} />
          </button>
          <button onClick={handleNextClick}>
            <IconImage src={iconList[3]?.src} alt={iconList[5]?.alt} />
          </button>
        </div>
      </header>
      <div className={styles.calendar}>
        <ul className={styles.calendar_weeks}>
          <li className={styles.calendar_weeks_item}>S</li>
          <li className={styles.calendar_weeks_item}>M</li>
          <li className={styles.calendar_weeks_item}>T</li>
          <li className={styles.calendar_weeks_item}>W</li>
          <li className={styles.calendar_weeks_item}>T</li>
          <li className={styles.calendar_weeks_item}>F</li>
          <li className={styles.calendar_weeks_item}>S</li>
        </ul>
        <ul className={styles.days}>{renderCalendar()}</ul>
      </div>
    </div>
  );
};

export default DatePicker;
