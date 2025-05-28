import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import UserDetailsPage from './components/userDetailsPage';

const App = () => (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </Router>
);

export default App;
