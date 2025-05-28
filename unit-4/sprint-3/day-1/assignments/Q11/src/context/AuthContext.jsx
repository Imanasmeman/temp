import React, { createContext, useReducer, useContext } from 'react';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, user: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    default:
      throw new Error('Invalid action type');
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);