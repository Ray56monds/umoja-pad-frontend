import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle known errors here
      alert(error.response.data.message || 'An error occurred');
    } else {
      // Handle unexpected errors here
      alert('An unexpected error occurred');
    }
    return Promise.reject(error);
  }
);

export default api;
