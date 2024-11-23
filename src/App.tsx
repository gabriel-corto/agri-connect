import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./theme/default";

import { BrowserRouter } from "react-router-dom";
import { Routers } from "./Routers";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}