import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import './EmailDisplay.css';

interface Props {
  email: string;
}

const EmailDisplay: React.FC<Props> = ({ email }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert('E-mail copied to clipboard!');
  };

  return (
    <div id="email-display">
      <span>{email}</span>
      {email && (
        <button onClick={copyToClipboard} className="copy-btn">
          <FontAwesomeIcon icon={faCopy} />
        </button>
      )}
    </div>
  );
}

export default EmailDisplay;
