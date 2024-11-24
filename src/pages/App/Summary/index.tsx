import { CircleNotch, Package, Storefront, Truck } from "phosphor-react";
import { SummaryCardContainer, SummaryContainer, SummaryHeaderContainer } from "./style";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryHeaderContainer>
        <h3>
          <Package size={42}/>
          <span>Resumo</span>
        </h3>

       {/*  <button>
          <CalendarPlus size={24} />
          <span>Agendar Nova Entrega</span>
        </button> */}
      </SummaryHeaderContainer>

      <SummaryCardContainer>
        <div>
          <h1>
            <span>Pendentes</span>
            <CircleNotch size={32} weight="bold" />
          </h1>
          <strong>19</strong>
        </div>
        <div>
          <h1>
            <span>Entregues</span>
            <Truck size={32} weight="bold" />
          </h1>
          <strong>19</strong>
        </div>
        <div>
          <h1>
            <span>Confirmados</span>
            <Storefront size={32} weight="bold" />
          </h1>
          <strong>19</strong>
        </div>
      </SummaryCardContainer>
    </SummaryContainer>
  )
}