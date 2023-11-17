// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if there is a stored authentication token or user information in localStorage
    const storedUserInfo = localStorage.getItem('user-info');

    if (storedUserInfo) {
      // Parse and set the authentication state
      const userInfo = JSON.parse(storedUserInfo);
      setIsAuthenticated(true);
      // Additional logic to set user information if needed
    }
  }, []); // Empty dependency array ensures the effect runs only once during initialization

  const login = () => {
    // Your login logic here...

    // Assuming login is successful, set the authentication state and store user information
    setIsAuthenticated(true);
    // Additional logic to store user information if needed
    localStorage.setItem('user-info', JSON.stringify());
  };

  const logout = () => {
    // Clear the authentication state and remove user information from localStorage
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
