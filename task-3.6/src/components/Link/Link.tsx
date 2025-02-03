import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import styles from "./Link.module.scss";
import "../../styles/link.scss";
import "../../styles/reset.css";

interface LinkProps {
  to: string;
  label: string;
  isDisabled?: boolean;
}

const Link: React.FC<LinkProps> = ({ to, label, isDisabled = false }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled) {
      e.preventDefault();
    }
  };

  return (
    <RouterLink
      to={isDisabled ? "#" : to}
      className={`${styles.link} ${isDisabled ? styles.disabled : ""}`}
      onClick={handleClick}
    >
      {label}
    </RouterLink>
  );
};

export default Link;
