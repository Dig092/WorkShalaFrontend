import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const useAuthCheck = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to the login page if not authenticated
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
};

export default useAuthCheck;
