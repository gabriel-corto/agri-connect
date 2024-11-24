import * as Dialog from "@radix-ui/react-dialog";
import { Content, Description, InputSeparator, Overlay, Title } from "./style";
import { CaretCircleRight, Envelope, Lock, User, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";

const registerFormDataValidationSchema = zod.object({
  name: zod.string().min(3, "Preencha o Nome").max(50, "Nome muito longo"),
  email: zod.string().email("E-mail inválido"),
  password: zod.string().min(6, "A senha deve ter no mínimo 6 caracteres").max(20, "A senha deve ter no máximo 20 caracteres"),
});

type RegisterFormData = zod.infer<typeof registerFormDataValidationSchema>

interface Farmers {
  id: string 
  name: string 
  email: string 
  password: string 
  processedAt: Date
}
export function RegisterModal() {

  const navigation = useNavigate()
  const { authenticateUser } = useContext(AuthContext)
   
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormDataValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  async function handleRegister(data: RegisterFormData) {
    toast.error("Conta criada com sucesso!", {
      style: {
        background: "#bbf7d0",
        color: "#059669",
        padding: "1rem",
      }
    })

    setTimeout(() => {
      authenticateUser()
      navigation("/app")
    }, 3000) 

    const newFarmer: Farmers = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      password: data.password,
      processedAt: new Date(),
    }

    const response = await api.post("/users", newFarmer)
  }

  function handleErros() {
    if (Object.keys(errors).length === 0) {
      toast.error("Preencha os campos vázios!", {
        style: {
          background: "#fee2e2",
          color: "#dc2626",
          padding: "1rem",
        }
      })
    } else {
      if (errors.name) {
        toast.error("Campo nome obrigatório!", {
          style: {
            background: "#fee2e2",
            color: "#dc2626",
            padding: "1rem",
          }
        })
      };
      if (errors.email) {
        toast.error("Endereço de e-mail inválido!", {
          style: {
            background: "#fee2e2",
            color: "#dc2626",
            padding: "1rem",
          }
        })
      };
      if (errors.password) {
        toast.error("No mínimo 6 caracteres pra senha!", {
          style: {
            background: "#fee2e2",
            color: "#dc2626",
            padding: "1rem",
          }
        })
      };
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
              <label htmlFor="name">
                <User size={20} />
                <span>Nome Completo</span>
              </label>

              <input 
                id="name"
                type="text" 
                placeholder="Ex: Eduardo Pedro"
                {...register("name")} 
              />
            </InputSeparator>

            <InputSeparator>
              <label htmlFor="email">
                <Envelope size={20} />
                <span>Endereço de e-mail</span>
              </label>

              <input type="email"
                  id="email"
                  typeof="email" 
                  placeholder="Ex: marianagabriel@gmail.com"
                  {...register("email")} 
              />
            </InputSeparator>

            <InputSeparator>
              <label htmlFor="password">
                <Lock size={20} />
                <span>Crie uma senha de no mínimo 6 caracteres</span>
              </label>

              <input 
                id="password"
                type="password"
                placeholder="******* ******"
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