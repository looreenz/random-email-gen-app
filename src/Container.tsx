import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "./Container.css";
import DomainButtons from "./DomainButtons";
import LengthButtons from "./LengthButtons";

function Container() {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedLength, setSelectedLength] = useState<number | null>(null);
  const [email, setEmail] = useState<string>("");

  const handleDomainSelect = (domain: string) => {
    setSelectedDomain(domain);
  };

  const handleLengthSelect = (length: number) => {
    setSelectedLength(length);
  };

  const generateEmail = () => {
    if (!selectedDomain) {
      alert("Please select the domain before generating the email.");
      return;
    }

    if (!selectedLength) {
      alert("Please select the name length before generating the email.");
      return;
    }

    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    let username = "";
    for (let i = 0; i < selectedLength; i++) {
      username += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    const generatedEmail = `${username}@${selectedDomain}`;
    setEmail(generatedEmail);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <div className="container">
      <h1>Random E-mail Generator</h1>
      <DomainButtons
        onSelect={handleDomainSelect}
        selectedDomain={selectedDomain}
      />
      <LengthButtons
        onSelect={handleLengthSelect}
        selectedLength={selectedLength}
      />
      <button id="generate-btn" onClick={generateEmail}>
        Generate E-mail
      </button>
      <div id="email-display">
        {email}
        {email && (
          <button id="copy-btn" onClick={copyToClipboard}>
            <FontAwesomeIcon icon={faCopy} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Container;
