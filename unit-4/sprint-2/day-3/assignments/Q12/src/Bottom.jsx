import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Bottom = () => {
  const theme = useContext(ThemeContext);

  const boxStyle = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    borderRadius: '8px',
  };

  return (
    <div style={boxStyle}>
      <p>This is the bottom component using {theme} theme.</p>
    </div>
  );
};

export default Bottom;
