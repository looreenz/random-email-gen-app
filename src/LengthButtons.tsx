import React from "react";
import "./LengthButtons.css";

interface LengthButtonsProps {
  onSelect: (length: number) => void;
  selectedLength: number | null;
}

const LengthButtons: React.FC<LengthButtonsProps> = ({
  onSelect,
  selectedLength,
}) => {
  return (
    <div id="length-buttons">
      <p>Select the name length:</p>
      <button
        className={`length-btn ${selectedLength === 8 ? "active" : ""}`}
        onClick={() => onSelect(8)}
      >
        Short
      </button>
      <button
        className={`length-btn ${selectedLength === 15 ? "active" : ""}`}
        onClick={() => onSelect(15)}
      >
        Medium
      </button>
      <button
        className={`length-btn ${selectedLength === 20 ? "active" : ""}`}
        onClick={() => onSelect(20)}
      >
        Long
      </button>
    </div>
  );
};

export default LengthButtons;
