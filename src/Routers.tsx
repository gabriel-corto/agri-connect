import { Route, Routes } from "react-router-dom";

import { Landing } from "./layouts/LandingLayout";
import { Home } from "./pages/Home";

import { AppLayout } from "./layouts/AppLayout";
import { Dashboard } from "./pages/App/Dashboard";
import { Settings } from "./pages/Settings";
import { ProtectedRoute } from "./Protected";

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/app" element={<AppLayout />}>
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