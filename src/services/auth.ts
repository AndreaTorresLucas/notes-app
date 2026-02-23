import axios from 'axios';
import { LoginCredentials, LoginResponse } from '../types/types';
import { getToken, clearAuth } from '../store/authStorage';

const baseUrl = "http://localhost:8080/auth"

const logIn = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const { data } = await axios.post(`${baseUrl}/login`, credentials)
    return data
}

const logOut = async (): Promise<void> => {
  try {
    const token = getToken();
    if (!token) return;

    await axios.post(`${baseUrl}/logout`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
  } catch (err) {
    console.error("Error logging out:", err);
  } finally {
    clearAuth(); 
  }
};

export default { logIn, logOut };