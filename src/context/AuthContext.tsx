import { createContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  authenticateUser: () => void;
  userSignOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const token = localStorage.getItem('authToken');
    return token!== null;
  })

  function authenticateUser() {
    localStorage.setItem('authToken', crypto.randomUUID());
    setIsAuthenticated(true);
  }

  useEffect(() => {

    if(isAuthenticated) {
      console.log("Usuário Autenticado !")
    } else {
      console.log("Usuário Não Autenticado !")
    }

  }, [isAuthenticated])

  function userSignOut() {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      authenticateUser,
      userSignOut
    }}>
      {children}
    </AuthContext.Provider>
  );
};
