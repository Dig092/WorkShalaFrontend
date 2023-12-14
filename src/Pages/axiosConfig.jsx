import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://workshala-7v7q.onrender.com', 
  timeout: 5000, 
});

// Interceptor to add the Authorization header with the access token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
