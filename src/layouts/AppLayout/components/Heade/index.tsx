import { NavLink, useNavigate } from "react-router-dom";
import { AsideContainer, NavbarContainer, SidebarContainer, SignOutContainer } from "./style";
import { House, SignOut, UserCircle } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

export function Header() {

  const navigation = useNavigate()
  const { userSignOut } = useContext(AuthContext)

  function handleAuthenticateUser() {
    userSignOut()
    navigation("/")
  }

  return (
    <SidebarContainer>
      <div>
        <h1>Agri.<span>connect</span> </h1>

        <NavbarContainer>
          <NavLink to="/app">
            <House weight="bold" size={32} />
            <span>Home</span>
          </NavLink>
          <NavLink to="/app/form">
            <House weight="bold" size={32} />
            <span>Painel</span>
          </NavLink>
          <NavLink to="/app/o">
            <House weight="bold" size={32} />
            <span>Painel</span>
          </NavLink>
        </NavbarContainer>
      </div>

      <AsideContainer>
        <SignOutContainer onClick={handleAuthenticateUser}>
          <SignOut size={24}/>
          <span>Sair</span>
        </SignOutContainer>

        <div>
          <UserCircle  size={24}/>
          <span>Eduardo Santos</span>
        </div>
      </AsideContainer>
    </SidebarContainer>
  )
}