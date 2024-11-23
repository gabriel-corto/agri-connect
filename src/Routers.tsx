import { Route, Routes } from "react-router-dom";

import { Landing } from "./layouts/Landing";
import { Home } from "./pages/Home";

import { AuthLayout } from "./layouts/Auth";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";
import { ProtectedRoute } from "./Protected";

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/app" element={<AuthLayout/>}>
        <Route 
          index element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="settings" 
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } 
        />
      </Route>
    </Routes>
  )
}