import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./theme/default";

import { BrowserRouter } from "react-router-dom";
import { Routers } from "./Routers";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "sonner";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </AuthProvider>

      <Toaster position="top-right"  />
      <GlobalStyle />
    </ThemeProvider>
  )
}