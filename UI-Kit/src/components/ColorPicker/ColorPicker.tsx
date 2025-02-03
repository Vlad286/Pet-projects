import React, { useState } from "react";
import styles from "./ColorPicker.module.scss";

interface ColorPickerProps {
  colors: string[];
  onSelectColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors, onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorClick = (color: string) => {
    if (color !== selectedColor) {
      setSelectedColor(color);
      onSelectColor(color);
    }
  };

  return (
    <div className={styles.colorPicker}>
      <div className={styles.colorPalette}>
        {colors.map((color, index) => (
          <button
            key={index}
            className={`${styles.colorBox} ${
              selectedColor === color ? styles.selected : ""
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;

