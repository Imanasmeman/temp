import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CountrySearch from './pages/CountrySearch';

function App() {
  return (
    <AuthProvider>
      <Router>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<PrivateRoute><CountrySearch /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
