import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('user-info');

    if (storedUserInfo) {
      const userInfo = JSON.parse(storedUserInfo);
      setIsAuthenticated(true);
    }
  }, []); 

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('user-info', JSON.stringify());
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('user-info');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
