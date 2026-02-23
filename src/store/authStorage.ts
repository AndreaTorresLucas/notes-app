import { TokenResponse, User } from "../types/types";


export const saveAuth = (token: TokenResponse) => {
  localStorage.setItem('access', token.access_token);
};

export const getToken = () => localStorage.getItem('access');

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const clearAuth = () => {
  localStorage.removeItem('access');
  localStorage.removeItem('user');
};