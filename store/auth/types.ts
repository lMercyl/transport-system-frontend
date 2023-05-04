export interface User {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}
