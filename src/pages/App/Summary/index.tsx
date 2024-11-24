import { CircleNotch, Package, Storefront, Truck } from "phosphor-react";
import { SummaryCardContainer, SummaryContainer, SummaryHeaderContainer } from "./style";
import { useContext } from "react";
import { ScheduleContext } from "../components/DeliveryModal";

export function Summary() {

  const { schedules } = useContext(ScheduleContext)
  return (
    <SummaryContainer>
      <SummaryHeaderContainer>
        <h3>
          <Package size={42}/>
          <span>Resumo</span>
        </h3>
      </SummaryHeaderContainer>

      <SummaryCardContainer>
        <div>
          <h1>
            <span>Pendentes</span>
            <CircleNotch size={32} weight="bold" />
          </h1>
          <strong>
            {schedules.length}
          </strong>
        </div>
        <div>
          <h1>
            <span>Entregues</span>
            <Truck size={32} weight="bold" />
          </h1>
          <strong>{schedules.length}</strong>
        </div>
        <div>
          <h1>
            <span>Confirmados</span>
            <Storefront size={32} weight="bold" />
          </h1>
          <strong>{schedules.length}</strong>
        </div>
      </SummaryCardContainer>
    </SummaryContainer>
  )
}