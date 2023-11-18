import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('access-token');

    const headersAccessToken = getHeadersAccessToken();

    if (storedAccessToken || headersAccessToken) {
      setIsAuthenticated(true);
    }
  }, []); 
  const login = (accessToken) => {
    setIsAuthenticated(true);
    localStorage.setItem('access-token', accessToken);
  };

  const logout = () => {
    // Clear the authentication state and remove access token from localStorage
    setIsAuthenticated(false);
    localStorage.removeItem('access-token');
  };

  const getHeadersAccessToken = () => {
    // Retrieve the access token from the request headers
    const headers = new Headers();
    const authorizationHeader = headers.get('Authorization');
    
    if (authorizationHeader) {
      const [tokenType, accessToken] = authorizationHeader.split(' ');
      if (tokenType === 'Bearer') {
        return accessToken;
      }
    }

    return null;
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
