import axios from "axios";
import { getToken, clearAuth } from "../store/authStorage";

const axiosAuth = axios.create({
  baseURL: "http://localhost:8080",
});

axiosAuth.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosAuth.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      clearAuth();          
      window.location.href = "/"; 
    }

    return Promise.reject(error);
  }
);

export default axiosAuth;