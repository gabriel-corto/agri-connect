import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px ${props => props.theme["green-300"]};
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-weight: 400;
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
  }
`