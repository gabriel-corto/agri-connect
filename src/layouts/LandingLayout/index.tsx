import { Header } from "./components/Header";

import { Outlet } from "react-router-dom";

import { LandingContainer } from "./style";

export function Landing() {
  return (
    <LandingContainer>
      <Header />
      <Outlet />
    </LandingContainer>
  )
}