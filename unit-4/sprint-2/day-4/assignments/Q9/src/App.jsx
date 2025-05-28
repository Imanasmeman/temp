import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Welcome to Home Page</h1>;
}

function About() {
  return <h1>Welcome to About Page</h1>;
}

function Contact() {
  return <h1>Welcome to Contact Page</h1>;
}

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '10px' }}>About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
