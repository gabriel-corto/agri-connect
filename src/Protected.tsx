
import { ReactNode, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode
}
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  
  const { isAuthenticated } = useContext(AuthContext);
  
  if (!isAuthenticated) {
    return <Navigate to="/" />
  } 

  return children
}
