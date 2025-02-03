import React, { useState } from "react";
import styles from "./TextArea.module.scss";

interface TextAreaProps {
  value?: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  onChange?: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  value = "",
  placeholder = "Введите текст...",
  rows = 1,
  maxLength = 200,
  onChange,
}) => {
  const [currentValue, setCurrentValue] = useState(value);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setCurrentValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    if (!currentValue.trim()) {
      setIsExpanded(false);
    }
  };

  return (
    <div>
      <h2 className={styles.textArea_title}>Description</h2>
      <div
        className={`${styles.textArea} ${
          isExpanded ? styles.textArea_expanded : ""
        }`}
      >
        <textarea
          className={styles.textArea_input}
          value={currentValue}
          placeholder={placeholder}
          rows={isExpanded ? rows : 1}
          maxLength={maxLength}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <div className={styles.textArea_counter}>
          {currentValue.length}/{maxLength}
        </div>
      </div>
    </div>
  );
};

export default TextArea;
