import styled from "styled-components"

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;
  
  .logo {
    font-family: "Baloo 2";
    font-size: 1.5rem;
    color: ${props => props.theme["gray-900"]};

    span {
      color: ${props => props.theme["yellow-500"]};
    }
  }

  button {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    padding: 1rem;

    font-weight: bold;
    border-radius: 999px;

    color: ${props => props.theme.white};
    background: ${props => props.theme["green-300"]};

    &:hover {
      cursor: pointer;
      background: ${props => props.theme["green-500"]};
    }
  }
`
