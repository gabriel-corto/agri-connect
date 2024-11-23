import { Truck } from "phosphor-react"
import { DashboardContainer } from "./style"

export function Dashboard() {
  return (
    <DashboardContainer>
      <h3>
        <Truck size={42}/>
        <span>Entregas</span>
      </h3>
      
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Transportadora</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Maçã</td>
            <td>10kg</td>
            <td>MobiTrans</td>
            <td>Há 1 Mês</td>
            <td>Pendente</td>
          </tr>
        </tbody>
      </table>
    </DashboardContainer>
  )
}