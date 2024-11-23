import * as Dialog from "@radix-ui/react-dialog";
import { Content, Description, InputSeparator, Overlay, Title } from "./style";
import { CaretCircleRight, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom"

const registerFormDataValidationSchema = zod.object({
  name: zod.string().min(3, "Preencha o Nome").max(50, "Nome muito longo"),
  email: zod.string().email("E-mail inválido"),
  farmAddress: zod.string().min(3, "Preencha o Endereço").max(100, "Endereço muito longo"),
  products: zod.string().nonempty("Preencha os produtos"),
  password: zod.string().min(6, "A senha deve ter no mínimo 6 caracteres").max(20, "A senha deve ter no máximo 20 caracteres"),
});

type RegisterFormData = zod.infer<typeof registerFormDataValidationSchema>

export function RegisterModal() {

  const navigation = useNavigate()
  
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormDataValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      farmAddress: "",
      password: "",
      products: ""
    }
  })


  function handleRegister(data: RegisterFormData) {
    console.log("Registrar: ", data)
    
    localStorage.setItem("authToken", crypto.randomUUID())
    navigation("/app")
  }

  function handleErros() {
    if (Object.keys(errors).length === 0) {
      toast.error("Por favor, preencha todos os campos.");
    } else {
      if (errors.name) toast.error(errors.name.message);
      if (errors.email) toast.error(errors.email.message);
      if (errors.farmAddress) toast.error(errors.farmAddress.message);
      if (errors.products) toast.error(errors.products.message);
      if (errors.password) toast.error(errors.password.message);
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
				<Title>
          <strong>Nova Conta | Agri.connect</strong>

          <Dialog.Close>
            <X size={24} weight="bold" />
          </Dialog.Close>
        </Title>

				<Description>
          <form onSubmit={handleSubmit(handleRegister, handleErros)}>
            <InputSeparator>
              <input 
                type="text" 
                placeholder="Nome completo"
                {...register("name")} 
              />

              <input type="email" 
                placeholder="Endereço de e-mail"
                {...register("email")} 
              />
            </InputSeparator>

            <InputSeparator>
              <input 
                type="text" 
                placeholder="Endereço da fazenda"
                {...register("farmAddress")} 
              />
              <input 
                type="text" 
                placeholder="Tipo de Produto"
                list="items-suggestions"
                {...register("products")}  
              />
            </InputSeparator>
            
            <datalist id="items-suggestions">
              <option>Frutas</option>
              <option>Vegetais</option>
              <option>Grãos</option>
              <option>Outros</option>
            </datalist>

            <InputSeparator>
              <input 
                type="password" 
                placeholder="Crie uma Senha"
                {...register("password")} 
              />
            </InputSeparator>

            <InputSeparator>
              <button type="submit">
                <CaretCircleRight size={24} weight="bold" />
                Criar Sua Conta
              </button>
            </InputSeparator>
          </form>
        </Description>
				
			</Content>
    </Dialog.Portal>
  )
}