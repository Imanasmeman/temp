import React from 'react';

function Button({ text, color }) {
  return (
    <button className="plan-button" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

export default Button;