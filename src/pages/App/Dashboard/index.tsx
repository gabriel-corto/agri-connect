import { CalendarPlus, MagnifyingGlass, Truck } from "phosphor-react"
import { DashboardContainer, DashHeaderContainer, SearchFormContainer, StatusContainer } from "./style"
import { DeliveryModal } from "../components/DeliveryModal"
import * as Dialog from "@radix-ui/react-dialog"
import * as zod from "zod" 
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const filterFormValidationSheme = zod.object({
  query: zod.string().max(5)
}) 

type FilterFormData = zod.infer<typeof filterFormValidationSheme>

export function Dashboard() {

  const { register, handleSubmit } = useForm<FilterFormData>({
    resolver: zodResolver(filterFormValidationSheme),
    defaultValues: {
      query: ""
    }
    
  })

  function handleFilterData(data: FilterFormData) {
    console.log(data.query)
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
          <tr>
            <td>Banana Holandesa</td>
            <td>32 kg</td>
            <td>MobiTrans</td>
            <td>Há 1 Mês</td>
            <td>
              <StatusContainer variant="pending"> Pendente</StatusContainer>
            </td>
          </tr>
          <tr>
            <td>Tomate Verde</td>
            <td>25 kg</td>
            <td>TransPorto</td>
            <td>Há 3 Mês</td>
            <td>
              <StatusContainer variant="delivered"> Entregue</StatusContainer>
            </td>
          </tr>
          <tr>
            <td>Maçã Angolanas</td>
            <td>10kg</td>
            <td>TransMove</td>
            <td>Há 1 mês</td>
            <td>
              <StatusContainer variant="pending"> Pendente</StatusContainer>
            </td>
          </tr>
          <tr>
            <td>Cebola Rocha</td>
            <td>19kg</td>
            <td>MobiTrans</td>
            <td>Há 3 meses</td>
            <td>
              <StatusContainer variant="accepted"> Confirmado</StatusContainer>
            </td>
          </tr>
          <tr>
            <td>Ovos</td>
            <td>60 kg</td>
            <td>TransLogística</td>
            <td>Há 1 Mês</td>
            <td>
              <StatusContainer variant="accepted"> Confirmado</StatusContainer>
            </td>
          </tr>
          <tr>
            <td>Ovos</td>
            <td>60 kg</td>
            <td>TransLogística</td>
            <td>Há 1 Mês</td>
            <td>
              <StatusContainer variant="delivered"> Entregue</StatusContainer>
            </td>
          </tr>
        </tbody>
      </table>
    </DashboardContainer>
  )
}