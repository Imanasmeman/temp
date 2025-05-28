import React, { useState } from 'react';
import Top from './Top';

const App = () => {
  const [userName, setUserName] = useState('');

  return (
    <div>
      <h1>Props Drilling Demo</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Top userName={userName} />
    </div>
  );
};

export default App;
