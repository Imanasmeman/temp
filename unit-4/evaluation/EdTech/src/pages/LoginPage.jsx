
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import './LoginPage.css';

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter your email');
      return;
    }

    // Simulated login
    login({ email });
  };

  return (
    <div className="login-container">
      <h2>Login to EdTech</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          placeholder="example@email.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
