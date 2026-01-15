const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export interface User {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

class AuthService {
  private getAuthToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('auth_token');
  }

  private setAuthToken(token: string): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('auth_token', token);
  }

  private removeAuthToken(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('auth_token');
  }

  private getUserFromStorage(): User | null {
    if (typeof window === 'undefined') return null;
    const userStr = localStorage.getItem('auth_user');
    return userStr ? JSON.parse(userStr) : null;
  }

  private setUserInStorage(user: User): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem('auth_user', JSON.stringify(user));
  }

  private removeUserFromStorage(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('auth_user');
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    // Store token and user
    this.setAuthToken(data.token);
    this.setUserInStorage(data.user);

    return data;
  }

  async register(userData: RegisterData): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }

    // Store token and user
    this.setAuthToken(data.token);
    this.setUserInStorage(data.user);

    return data;
  }

  async getCurrentUser(): Promise<User> {
    const token = this.getAuthToken();
    if (!token) {
      throw new Error('No token found');
    }

    const response = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 401) {
        this.logout();
      }
      throw new Error(data.message || 'Failed to get user');
    }

    // Update user in storage
    this.setUserInStorage(data.user);

    return data.user;
  }

  logout(): void {
    this.removeAuthToken();
    this.removeUserFromStorage();
  }

  isAuthenticated(): boolean {
    return !!this.getAuthToken();
  }

  getStoredUser(): User | null {
    return this.getUserFromStorage();
  }

  getToken(): string | null {
    return this.getAuthToken();
  }
}

export const authService = new AuthService();

