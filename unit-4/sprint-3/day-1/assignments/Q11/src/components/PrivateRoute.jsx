import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ children }) {
  const { state } = useAuth();
  return state.isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
