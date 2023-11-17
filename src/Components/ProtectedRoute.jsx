// ProtectedRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuthCheck from './AuthCheck';

const ProtectedRoute = ({ element, ...rest }) => {
    const isAuthenticated = useAuthCheck();
  
    return isAuthenticated ? (
      <Route {...rest} element={element} />
    ) : (
      <Navigate to="/login" />
    );
  };
  
  export default ProtectedRoute;