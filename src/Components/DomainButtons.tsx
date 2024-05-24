import React from "react";
import "./DomainButtons.css";

interface Props {
  setSelectedDomain: (domain: string) => void;
}

const DomainButtons: React.FC<Props> = ({ setSelectedDomain }) => {
  const domains = ["gmail.com", "icloud.com", "outlook.com", "yahoo.com"];

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttons = document.querySelectorAll(".domain-btn");
    buttons.forEach((button) => button.classList.remove("active"));
    event.currentTarget.classList.add("active");
    setSelectedDomain(event.currentTarget.dataset.domain!);
  };

  return (
    <div id="domain-buttons">
      <p>Select the domain:</p>
      {domains.map((domain) => (
        <button
          key={domain}
          data-domain={domain}
          onClick={handleButtonClick}
          className="domain-btn"
        >
          {domain}
        </button>
      ))}
    </div>
  );
};

export default DomainButtons;
