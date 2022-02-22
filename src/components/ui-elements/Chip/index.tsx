import React, { ReactEventHandler } from "react";
import styles from "./index.css";

interface ChipProps {
  label: string;
  className: string;
  onClick: ReactEventHandler;
}

const Chip = ({ label, onClick, className }: ChipProps) => {
  return (
    <button className={`${styles.root} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Chip;
