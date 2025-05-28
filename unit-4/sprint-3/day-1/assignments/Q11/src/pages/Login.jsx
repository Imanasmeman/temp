import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch({ type: 'LOGIN', payload: { email } });
    navigate('/search');
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;