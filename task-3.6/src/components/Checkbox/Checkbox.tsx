import React from 'react';
import { useState } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <label className={styles.checkbox_container}>
      <input
        className={styles.checkbox_input}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className={styles.checkbox_custom}></span>
      {label}
    </label>
  );
};

export default Checkbox;
