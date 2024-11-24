import { CalendarPlus, MagnifyingGlass, Truck } from "phosphor-react"
import { DashboardContainer, DashHeaderContainer, SearchFormContainer, StatusContainer } from "./style"
import { DeliveryModal, ScheduleContext } from "../components/DeliveryModal"
import * as Dialog from "@radix-ui/react-dialog"
import * as zod from "zod" 
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

const filterFormValidationSheme = zod.object({
  query: zod.string().max(10)
}) 

type FilterFormData = zod.infer<typeof filterFormValidationSheme>

export function Dashboard() {

  const { schedules, filterSchedules } = useContext(ScheduleContext)

  const { register, handleSubmit } = useForm<FilterFormData>({
    resolver: zodResolver(filterFormValidationSheme),
    defaultValues: {
    }
  })

  function handleFilterData(data: FilterFormData) {
    filterSchedules(data.query)
  }
  

  return (
    <DashboardContainer>
      <DashHeaderContainer>
        <h3>
          <Truck size={42}/>
          <span>Entregas</span>
        </h3>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <CalendarPlus size={24} />
              <span>Agendar Nova Entrega</span>
            </button>
          </Dialog.Trigger>

          <DeliveryModal />
        </Dialog.Root>

      </DashHeaderContainer>

      <SearchFormContainer onSubmit={handleSubmit(handleFilterData)}>
        <input 
          type="text"
          placeholder="Filtrar" 
          {...register("query")}
        />
          

        <button type="submit">
          <MagnifyingGlass size={24} />
          <span>Buscar</span>
        </button>
      </SearchFormContainer>
      
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
          {schedules.map(schedule => {
            return (
              <tr key={schedule.id}>
                <td>{schedule.product}</td>
                <td>{schedule.quantity} kg</td>
                <td>{schedule.transport}</td>
                <td>{formatDistanceToNow(new Date(schedule.createdAt), { addSuffix: true, locale: ptBR })}</td>
                <td>
                { schedule.status === "pending" && <StatusContainer variant="pending"> Pendente</StatusContainer> }
                { schedule.status === "accepted" && <StatusContainer variant="accepted"> Aceite</StatusContainer> }
                { schedule.status === "delivered" && <StatusContainer variant="delivered"> Entregue</StatusContainer> }
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </DashboardContainer>
  )
}