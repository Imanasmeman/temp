import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => setIsLoggedIn((prev) => !prev);

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      <div style={{ fontFamily: 'Arial', padding: '20px' }}>
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
