import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css'; // for styling

function Home() {
  return <h1>Welcome to Home Page</h1>;
}
function About() {
  return <h1>Welcome to About Page</h1>;
}
function Contact() {
  return <h1>Welcome to Contact Page</h1>;
}
function Services() {
  return <h1>Welcome to Services Page</h1>;
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/about" className="navlink">
          About
        </NavLink>
        <NavLink to="/contact" className="navlink">
          Contact
        </NavLink>
        <NavLink to="/services" className="navlink">
          Services
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
