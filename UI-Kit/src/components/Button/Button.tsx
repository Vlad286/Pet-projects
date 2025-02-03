import React from "react";
import styles from "./Button.module.scss";
import "../../styles/button.scss";

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?:
    | "primary"
    | "primary_with_icon"
    | "secondary"
    | "secondary_with_icon";
  icon?: string;
  isDisabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  icon,
  isDisabled = false,
  className = "",
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant || "primary"]} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {icon && (
        <img className={styles.button_with_icon} src={icon} alt="icon" />
      )}
      {label}
    </button>
  );
};

export default Button;
