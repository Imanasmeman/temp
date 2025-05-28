import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './LandingPage.css';

const LandingPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="landing-container">
      <nav className="navbar">
        <h1 className="logo">EdTech</h1>
        <div className="nav-links">
          <Link to="/courses">Browse Courses</Link>
          <Link to="/dashboard/new">Create Course</Link>
          {user ? (
            <>
              <span className="welcome">Welcome, {user}</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>

      <section className="hero">
        <h2>Empowering Instructors. Enabling Students.</h2>
        <p>Create and explore short, powerful courses to boost your skills.</p>
        <div className="hero-buttons">
          <Link to="/courses" className="btn">Browse Courses</Link>
          <Link to="/dashboard/new" className="btn-secondary">Create a Course</Link>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} EdTech. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/courses">Courses</Link>
          <Link to="/dashboard/new">Create</Link>
          {user ? (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
