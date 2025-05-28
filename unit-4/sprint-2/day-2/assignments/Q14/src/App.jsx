import React, { useRef } from 'react';

function OTPInput() {
  const inputRefs = useRef([]); // Array to hold refs of all input fields

  const handleChange = (e, index) => {
    // When a user types in the input, move focus to the next field
    if (e.target.value && index < 3) {
      inputRefs.current[index + 1].focus(); // Focus next input
    }
  };

  const handleKeyDown = (e, index) => {
    // If backspace is pressed, move focus to the previous field and clear its value
    if (e.key === 'Backspace') {
      if (index > 0) {
        inputRefs.current[index - 1].focus(); // Focus previous input
        inputRefs.current[index].value = ''; // Clear the current field
      } else {
        // If the backspace is pressed in the first field, clear its value.
        inputRefs.current[index].value = '';
      }
    }
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* Rendering four OTP input fields */}
        {Array.from({ length: 4 }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)} // Assign ref to input
            type="text"
            maxLength="1"
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{ width: '40px', textAlign: 'center', fontSize: '20px' }}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <OTPInput />
    </div>
  );
}

export default App;
