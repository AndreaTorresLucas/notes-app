export interface LoginCredentials {
    email: string;
    password: string;
}

export interface User {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    role: "USER" | "ADMIN";
}

export interface LoginResponse {
    token_info: TokenResponse;
    user: User;
}

export interface TokenResponse {
    access_token: string,
    refresh_token: string,
}

