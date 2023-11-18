// ProtectedRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuthCheck from './AuthCheck';

const ProtectedRoute = ({ children, ...rest }) => {
  const isAuthenticated = useAuthCheck();

  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Navigate to="/login" />
      )}
    </Route>
  );
};

export default ProtectedRoute;
