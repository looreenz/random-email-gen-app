import React from "react";
import "./DomainButtons.css";

interface DomainButtonsProps {
  onSelect: (domain: string) => void;
  selectedDomain: string | null;
}

const DomainButtons: React.FC<DomainButtonsProps> = ({
  onSelect,
  selectedDomain,
}) => {
  return (
    <div id="domain-buttons">
      <p>Select the domain:</p>
      <button
        className={`domain-btn ${
          selectedDomain === "gmail.com" ? "active" : ""
        }`}
        onClick={() => onSelect("gmail.com")}
      >
        @gmail.com
      </button>
      <button
        className={`domain-btn ${
          selectedDomain === "icloud.com" ? "active" : ""
        }`}
        onClick={() => onSelect("icloud.com")}
      >
        @icloud.com
      </button>
      <button
        className={`domain-btn ${
          selectedDomain === "outlook.com" ? "active" : ""
        }`}
        onClick={() => onSelect("outlook.com")}
      >
        @outlook.com
      </button>
      <button
        className={`domain-btn ${
          selectedDomain === "yahoo.com" ? "active" : ""
        }`}
        onClick={() => onSelect("yahoo.com")}
      >
        @yahoo.com
      </button>
    </div>
  );
};

export default DomainButtons;
