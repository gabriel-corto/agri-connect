// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./Auth/auth";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode
}
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" />
  }

  return children
};
