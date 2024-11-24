import { Route, Routes } from "react-router-dom";

import { Landing } from "./layouts/LandingLayout";
import { Home } from "./pages/Home";

import { AppLayout } from "./layouts/AppLayout";
import { Dashboard } from "./pages/App/Dashboard";
import { ProtectedRoute } from "./Protected";
import { Summary } from "./pages/App/Summary";
import { Transport } from "./pages/App/Transport";

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
          path="summary" 
          element={
            <ProtectedRoute>
              <Summary />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="transports" 
          element={
            <ProtectedRoute>
              <Transport />
            </ProtectedRoute>
          } 
        />
      </Route>
    </Routes>
  )
}