import axios from 'axios';
import { LoginCredentials, LoginResponse } from '../types/types';

const baseUrl = "http://localhost:8080/auth/login"

const logIn = async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const { data } = await axios.post(baseUrl, credentials)
    return data
}

export default { logIn };