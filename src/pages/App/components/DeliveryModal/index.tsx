import * as Dialog from "@radix-ui/react-dialog";
import { Content, Description, InputGrid, InputSeparator, Overlay, Title } from "./style";
import {  MapPin, Package, Popcorn, Truck, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const deliveryFormDataValidationSchema = zod.object({
  farmer: zod.string().min(3),
  product: zod.string().min(3),
  quantity: zod.number().min(1),
  transport: zod.string().min(3),
  cep: zod.string().regex(/^\d{5}-\d{3}$/),
  address: zod.string()
});

type deliveryFormData = zod.infer<typeof deliveryFormDataValidationSchema>

export function DeliveryModal() {
   
  const { register, handleSubmit, formState: { errors } } = useForm<deliveryFormData>({
    resolver: zodResolver(deliveryFormDataValidationSchema)
  })

  function handleNewDelivery() {

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
            </InputSeparator>


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
              <InputGrid>
                <label htmlFor="transport">
                  <MapPin size={20} />
                  <span>Endereço </span>
                </label>

                <input 
                  id="address"
                  type="text" 
                  placeholder=""
                  {...register("address")} 
                />
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