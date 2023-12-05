import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const useAuthCheck = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if authentication status is determined
    if (isAuthenticated === null) {
      // Optional: You can handle loading state here
      console.log('Authentication status is still being determined...');
      return;
    }

    // If not authenticated, redirect to the login page
    if (!isAuthenticated) {
      // Redirect to the login page and pass the intended route as a query parameter
      navigate(`/login?redirect=${location.pathname}`);
    }
  }, [isAuthenticated, navigate, location.pathname]);
};

export default useAuthCheck;

