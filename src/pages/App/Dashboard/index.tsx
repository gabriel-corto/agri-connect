import { CalendarPlus, Truck } from "phosphor-react"
import { DashboardContainer, DashHeaderContainer } from "./style"

export function Dashboard() {
  return (
    <DashboardContainer>
      <DashHeaderContainer>
        <h3>
          <Truck size={42}/>
          <span>Entregas</span>
        </h3>

        <button>
          <CalendarPlus size={24} />
          <span>Agendar Nova Entrega</span>
        </button>
      </DashHeaderContainer>
      
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
            <td>Banana Holandesa</td>
            <td>32 kg</td>
            <td>MobiTrans</td>
            <td>Há 1 Mês</td>
            <td>Pendente</td>
          </tr>
          <tr>
            <td>Tomate Verde</td>
            <td>25 kg</td>
            <td>TransPorto</td>
            <td>Há 3 Mês</td>
            <td>Concluído</td>
          </tr>
          <tr>
            <td>Maçã Angolanas</td>
            <td>10kg</td>
            <td>TransMove</td>
            <td>Há 1 mês</td>
            <td>Confirmado</td>
          </tr>
          <tr>
            <td>Cebola Rocha</td>
            <td>19kg</td>
            <td>MobiTrans</td>
            <td>Há 3 meses</td>
            <td>Pendente</td>
          </tr>
          <tr>
            <td>Ovos</td>
            <td>60 kg</td>
            <td>TransLogística</td>
            <td>Há 1 Mês</td>
            <td>Confirmado</td>
          </tr>
        </tbody>
      </table>
    </DashboardContainer>
  )
}