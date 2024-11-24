import * as Dialog from "@radix-ui/react-dialog";
import { Content, Description, InputGrid, InputSeparator, Overlay, Title } from "./style";
import { At, Package, Popcorn, Truck, User, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { api } from "../../../../lib/axios";
import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const deliveryFormDataValidationSchema = zod.object({
  farmer: zod.string().max(30),
  product: zod.string().max(30),
  quantity: zod.number().max(30),
  transport: zod.string().max(20),
  cep: zod.string().max(9),
});

type deliveryFormData = zod.infer<typeof deliveryFormDataValidationSchema>

type DeliveryStatus = "pending" | "accepted" | "delivered"

interface Delivery {
  id: string 
  farmer: string 
  product: string
  quantity: number 
  transport: string 
  cep: string
  adress: string 
  status: DeliveryStatus,
  createdAt: Date
}


interface ScheduleContextProps {
  schedules: Delivery[]
  createNewSchedule: (data: deliveryFormData) => void
  fetchSchedules: () => void  
  filterSchedules: (query: string) => void 
}
export const ScheduleContext = createContext({} as ScheduleContextProps)

export function ScheduleProvider({ children }: { children: ReactNode}) {

  const [ schedules, setSchedule ] = useState<Delivery[]>([])

  async function fetchSchedules() {
    const request = await api.get("/deliveries")
    const fetchData = request.data
      
    setSchedule(fetchData)
  }
  
  useEffect(() => {
    fetchSchedules()
  }, [])

  function filterSchedules(query: string) {
    schedules.filter(schedule => {
      if (schedule.product !== query) {
        setSchedule([schedule])
        return true;
      } else {
        return schedule  
      }
    })
  }
  
  

  async function createNewSchedule(data: deliveryFormData) {
    const cepRequest = await axios.
    get(`https://viacep.com.br/ws/${data.cep}/json/`)
    
    const { estado, logradouro, regiao } = cepRequest.data 

    const newDelivery: Delivery = {
      id: crypto.randomUUID(),
      farmer: data.farmer,
      product: data.product,
      quantity: data.quantity, 
      transport: data.transport, 
      cep: data.cep,
      adress: `${estado}, ,${logradouro}, ${regiao}`,
      status: "pending",
      createdAt: new Date()
    }
    
    const response = await api.post("/deliveries", newDelivery)

    toast.error("Uma nova entrega foi agendada!", {
      style: {
        background: "#bbf7d0",
        color: "#059669",
        padding: "1rem",
      }
    })
  }
  return (
    <ScheduleContext.Provider value={{
      schedules,
      createNewSchedule,
      fetchSchedules,
      filterSchedules
    }}>
      {children}
    </ScheduleContext.Provider>
  )
}

export function DeliveryModal() {

  const { createNewSchedule } = useContext(ScheduleContext)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<deliveryFormData>({
    resolver: zodResolver(deliveryFormDataValidationSchema),
    defaultValues: {
      quantity: 0
    }
  })
  async function handleNewDelivery(data: deliveryFormData) {
    createNewSchedule(data)
    reset()
  }

  function handleErros() {
    if (Object.keys(errors).length === 0) {
      toast.error("Ops! Verique os dados e tente novamente", {
        style: {
          background: "#fee2e2",
          color: "#dc2626",
          padding: "1rem",
        }
      })
    }

    if(errors.cep) {
      toast.error(errors.cep.message, {
        style: {
          background: "#fee2e2",
          color: "#dc2626",
          padding: "1rem",
        }
      })
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
				<Title>
          <strong>Criar Entrega - Agri.connect</strong>

          <Dialog.Close>
            <X size={20} weight="bold" />
          </Dialog.Close>
        </Title>

				<Description>
          <form onSubmit={handleSubmit(handleNewDelivery, handleErros)}>
            <InputSeparator>
              <InputGrid>
                <label htmlFor="productName">
                  <Popcorn size={20} />
                  <span>Seu Produto</span>
                </label>

                <input 
                  id="product"
                  type="text" 
                  placeholder="Ex: Banana Holandesa"
                  {...register("product")} 
                />
              </InputGrid>

              <InputGrid>
                <label htmlFor="farmer">
                  <User size={20} />
                  <span>Agricultor</span>
                </label>

                <input 
                  id="farmer"
                  type="text" 
                  placeholder="Ex: Gabriel"
                  {...register("farmer")} 
                />
              </InputGrid>
            </InputSeparator>

            <InputSeparator>
              <InputGrid>
                <label htmlFor="quantity">
                  <Package size={20} />
                  <span>Quantidade (kg) </span>
                </label>

                <input 
                  id="quantity"
                  type="text" 
                  placeholder="Ex: 16 kg"
                  {...register("quantity", { valueAsNumber: true } )} 
                />
              </InputGrid>

              <InputGrid>
                <label htmlFor="cep">
                  <At size={20} />
                  <span>CEP</span>
                </label>

                <input 
                  id="cep"
                  type="text" 
                  maxLength={9}
                  placeholder="00000-000"
                  {...register("cep")} 
                />
              </InputGrid>
            </InputSeparator>

            <InputSeparator>
              <InputGrid>
                <label htmlFor="transport">
                  <Truck size={20} />
                  <span>Transportadora Disponíveis </span>
                </label>

                <input 
                  list="transport-list"
                  id="transport"
                  type="text" 
                  placeholder="Selecione"
                  {...register("transport")} 
                />

                <datalist id="transport-list">
                  <option value="MobiTrans">MobiTrans</option>
                  <option value="TransPorto">TransPorto</option>
                  <option value="TransMove">TransMove</option>
                  <option value="TransLogística">TransLogística</option>
                </datalist>
              </InputGrid>
            </InputSeparator>

            <InputSeparator>
              <button type="submit">
                Processar Pedido
              </button>
            </InputSeparator>
          </form>
        </Description>
				
			</Content>
    </Dialog.Portal>
  )
}