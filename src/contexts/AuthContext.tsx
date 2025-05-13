
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  
  // Check if user is already logged in on component mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('moleculens_auth');
    if (storedAuth) {
      try {
        const { user, isAuthenticated } = JSON.parse(storedAuth);
        if (isAuthenticated && user) {
          setUser(user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error parsing auth data:', error);
        localStorage.removeItem('moleculens_auth');
      }
    }
  }, []);
  
  const login = async (email: string, password: string): Promise<void> => {
    // Mock login function
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = { email, name: email.split('@')[0] };
        setUser(user);
        setIsAuthenticated(true);
        localStorage.setItem('moleculens_auth', JSON.stringify({
          user,
          isAuthenticated: true
        }));
        resolve();
      }, 1000);
    });
  };
  
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('moleculens_auth');
    navigate('/login');
  };
  
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
