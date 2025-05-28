// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CourseProvider } from './contexts/CourseContext';
import LandingPage from './pages/LandingPage';
import CoursesPage from './pages/CoursesPage';
import DashboardNewPage from './pages/DashboardNewPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CourseProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/dashboard/new" element={<DashboardNewPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </CourseProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
