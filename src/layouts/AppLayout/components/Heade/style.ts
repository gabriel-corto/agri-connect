import styled from "styled-components";

export const SidebarContainer = styled.header`

  h1 {
    font-size: 2rem;
    font-family: "Baloo 2";
    span {
      color: ${props => props.theme["yellow-500"]};
    }
  }

  display: flex;
  flex-direction: column;
  gap: 13rem;

  height: 80vh;
  border-right: 1px solid #a1a1aa;
  color: ${props => props.theme["gray-900"]};

`
export const NavbarContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;

  a {
    text-decoration: none;
    border-radius: 8px;
    padding: 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    color: ${props => props.theme["gray-900"]};
    font-family: "Baloo 2";

    display: flex;
    align-items: center;
    gap: 0.5rem;

    &.active {
      color: ${props => props.theme["green-500"]};
    }
  }
`
export const AsideContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
export const SignOutContainer = styled.div`
  font-weight: 900;
  color: ${props => props.theme["red-500"]};

  &:hover {
    cursor: pointer;
    color: ${props => props.theme["red-700"]};
  }
`