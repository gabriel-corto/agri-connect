import * as Dialog from "@radix-ui/react-dialog";
import { Content, Description, InputSeparator, Overlay, Title } from "./style";
import {  Package, Popcorn, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const deliveryFormDataValidationSchema = zod.object({
  product: zod.string().min(3, "Adcione o nome para o produto"),
  quantity: zod.string().min(3)
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
      toast.error("Por favor, preencha todos os campos.");
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
				<Title>
          <strong>Criar Entrega - Agri.connect</strong>

          <Dialog.Close>
            <X size={24} weight="bold" />
          </Dialog.Close>
        </Title>

				<Description>
          <form onSubmit={handleSubmit(handleNewDelivery, handleErros)}>
            <InputSeparator>
              <label htmlFor="productName">
                <Popcorn size={26} />
                <span>Seu Produto</span>
              </label>

              <input 
                id="product"
                type="text" 
                placeholder="Ex: Banana Holandesa"
                {...register("product")} 
              />
            </InputSeparator>

            <InputSeparator>
              <label htmlFor="quantity">
                <Package size={26} />
                <span>Quantidade (kg) </span>
              </label>

              <input 
                id="quantity"
                type="text" 
                placeholder="Ex: 16 kg"
                {...register("quantity")} 
              />
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