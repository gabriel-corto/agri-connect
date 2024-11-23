import { NavLink } from "react-router-dom";
import { HeroContainer } from "./style";
import { SignIn } from "phosphor-react";

export function Home() {
  return (
    <div>
      <HeroContainer>
        <div>
          <h1>Conectando <br /> Agricultores ao Mercado</h1>
          <p>
            Facilite o <strong>transporte</strong> de seus produtos e reduza o desperdício. Agende suas entregas, otimize rotas e tenha acesso a uma rede de transportadores prontos para levar sua produção mais longe.
          </p>

          <NavLink to="/auth/login">
            <SignIn size={24} />
            Faça login
          </NavLink>
        </div>

        <img src="/hero-img.png" alt="" />
      </HeroContainer>
    </div>
  )
}