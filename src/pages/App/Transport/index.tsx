import { Truck } from "phosphor-react"
import { TransportContainer, TransportHeader } from "./style"

export function Transport() {
  return (
    <TransportContainer>
      <TransportHeader>
        <h3>
          <Truck size={42} />
          <strong>Transport</strong>
        </h3>
      </TransportHeader>
    </TransportContainer>
  )
}