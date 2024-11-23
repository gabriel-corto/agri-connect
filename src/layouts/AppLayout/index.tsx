import { Outlet } from "react-router-dom";
import { Header } from "./components/Heade";
import { AppContainer } from "./style";

export function AppLayout() {
  return (
    <AppContainer>
      <Header />
      <Outlet />
    </AppContainer>
  )
}