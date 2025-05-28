import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Top from './Top';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  const appStyles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#222222',
    color: theme === 'light' ? '#000000' : '#ffffff',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={appStyles}>
        <h1>Context API - Theme Toggle</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
        <Top />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
