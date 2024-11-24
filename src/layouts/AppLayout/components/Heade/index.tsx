import { NavLink, useNavigate } from "react-router-dom";
import { AsideContainer, NavbarContainer, SidebarContainer, SignOutContainer } from "./style";
import { House, MagnifyingGlass, MapPin, Package, SignOut, Truck, UserCircle } from "phosphor-react";
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
          <NavLink to="./summary">
            <Package weight="bold" size={32} />
            <span>Resumo</span>
          </NavLink>
          <NavLink to="./transports">
            <Truck weight="bold" size={32} />
            <span>Rede de Transporte</span>
          </NavLink>
        </NavbarContainer>
      </div>

      <AsideContainer>
        <SignOutContainer onClick={handleAuthenticateUser} title="Terminar Sessão">
          <SignOut size={24}/>
          <span>Sair</span>
        </SignOutContainer>

        <div>
          <MapPin size={24}/>
          <span>São Paulo</span>
        </div>

        <div>
          <UserCircle  size={24}/>
          <span>Eduardo Santos</span>
        </div>
      </AsideContainer>
    </SidebarContainer>
  )
}