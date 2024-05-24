import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4444', // Убедитесь, что URL-адрес API правильный
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
