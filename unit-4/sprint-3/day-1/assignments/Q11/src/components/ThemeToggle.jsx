import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return <button onClick={toggleTheme}>Toggle Theme</button>;
}

export default ThemeToggle;