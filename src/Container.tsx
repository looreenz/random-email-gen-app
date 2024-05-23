import React, { useState } from 'react';
import DomainButtons from './DomainButtons';
import LengthButtons from './LengthButtons';
import EmailDisplay from './EmailDisplay';
import './Container.css';

const Container: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedLength, setSelectedLength] = useState<number | null>(null);
  const [email, setEmail] = useState<string>('');

  const generateEmail = () => {
    if (!selectedDomain || !selectedLength) {
      alert('Please select both domain and name length.');
      return;
    }

    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let username = '';
    for (let i = 0; i < selectedLength; i++) {
      username += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    setEmail(`${username}@${selectedDomain}`);
  };

  return (
    <div className="container">
      <h1>Random E-mail Generator</h1>
      <DomainButtons setSelectedDomain={setSelectedDomain} />
      <LengthButtons setSelectedLength={setSelectedLength} />
      <button 
        onClick={generateEmail}
        className="generate-btn"
      >
        Generate E-mail
      </button>
      <EmailDisplay email={email} />
    </div>
  );
}

export default Container;
