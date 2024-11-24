import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./theme/default";

import { BrowserRouter } from "react-router-dom";
import { Routers } from "./Routers";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "sonner";
import { ScheduleProvider } from "./pages/App/components/DeliveryModal";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <ScheduleProvider>
          <BrowserRouter>
            <Routers />
          </BrowserRouter>
        </ScheduleProvider>
      </AuthProvider>

      <Toaster position="top-right"  />
      <GlobalStyle />
    </ThemeProvider>
  )
}