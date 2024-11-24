import * as Dialog from "@radix-ui/react-dialog";
import { X, SignIn, Envelope, Lock } from "phosphor-react";
import { Content, Description, InputSeparator, Overlay, Title } from "./style";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { api } from "../../lib/axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LoginFormDataValidationSchema = zod.object({
  email: zod.string().email("E-mail inválido"),
  password: zod.string().min(6, "A senha deve ter no mínimo 6 caracteres")
  .max(20, "A senha deve ter no máximo 20 caracteres"),
});

type LoginFormData = zod.infer<typeof LoginFormDataValidationSchema>



export function LoginModal() {

  const navigation = useNavigate()
  const { authenticateUser } = useContext(AuthContext)
  
  const [ users, setUsers ] = useState<LoginFormData[]>([])

  async function loadAPI () {
    const response = await api.get("/users")
    const apiData = response.data 
    
    setUsers(apiData)
  }

  useEffect(() => {
    loadAPI()
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormDataValidationSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  async function handleLogin(data: LoginFormData) {
    const authUser = users.find(user => {
      return user.email === data.email
    }) 
    
    if(authUser && authUser.password === data.password) {
      toast.error("Login feito com Sucesso!", {
        style: {
          background: "#bbf7d0",
          color: "#059669",
          padding: "1rem",
        }
      })

      setTimeout(() => {
        authenticateUser()
       navigation("/app")
      }, 2000)
    } else {
      toast.error("Ops! Usuário não encontrado!", {
        style: {
          background: "#fee2e2",
          color: "#dc2626",
          padding: "1rem",
        }
      })
    }

  }

  function handleErros() {
    if (errors.email || errors.password) {
      toast.error("Ops! Dados inválidos.", {
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
          <strong>Faça login na | Agri.connect</strong>

          <Dialog.Close>
            <X size={24} weight="bold" />
          </Dialog.Close>
        </Title>

				<Description>
          <form onSubmit={handleSubmit(handleLogin, handleErros)}>
            <InputSeparator>
             <label htmlFor="password">
                <Envelope size={20} />
                <span>Digite seu e-mail</span>
              </label>

              <input 
                id="email"
                type="email" 
                placeholder="E-mail"
                {...register("email")}
              />
            </InputSeparator>

            <InputSeparator>
              <label htmlFor="password">
                <Lock size={20} />
                <span>Digite a sua senha</span>
              </label>

              <input 
                id="password"
                type="password" 
                placeholder="****** ******"
                {...register("password")} 
              />
            </InputSeparator>

            <InputSeparator>
              <button type="submit">
                <SignIn size={24} weight="bold" />
                Fazer Login
              </button>
            </InputSeparator>
          </form>
        </Description>
				
			</Content>
    </Dialog.Portal>
  )
}