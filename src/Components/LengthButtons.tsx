import React from 'react';
import './LengthButtons.css';

interface Props {
  setSelectedLength: (length: number) => void;
}

const LengthButtons: React.FC<Props> = ({ setSelectedLength }) => {
  const lengths = [
    { label: 'Short', value: 8 },
    { label: 'Medium', value: 15 },
    { label: 'Long', value: 20 }
  ];

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttons = document.querySelectorAll('.length-btn');
    buttons.forEach(button => button.classList.remove('active'));
    event.currentTarget.classList.add('active');
    setSelectedLength(parseInt(event.currentTarget.dataset.length!));
  };

  return (
    <div id="length-buttons">
      <p>Select the name length:</p>
      {lengths.map(length => (
        <button 
          key={length.value}
          data-length={length.value}
          onClick={handleButtonClick}
          className="length-btn"
        >
          {length.label}
        </button>
      ))}
    </div>
  );
}

export default LengthButtons;
