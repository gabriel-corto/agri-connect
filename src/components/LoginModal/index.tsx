import * as Dialog from "@radix-ui/react-dialog";
import { X, SignIn, Envelope, Lock } from "phosphor-react";
import { Content, Description, InputSeparator, Overlay, Title } from "./style";

import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const LoginFormDataValidationSchema = zod.object({
  email: zod.string().email("E-mail inválido"),
  password: zod.string().min(6, "A senha deve ter no mínimo 6 caracteres")
  .max(20, "A senha deve ter no máximo 20 caracteres"),
});

type LoginFormData = zod.infer<typeof LoginFormDataValidationSchema>

export function LoginModal() {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormDataValidationSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  function handleLogin(data: LoginFormData) {
    console.log(data)
  }

  function handleErros() {
    if (Object.keys(errors).length === 0) {
      toast.error("Dados de Login Inválidos");
    } else {
      if (errors.email) toast.error(errors.email.message);
      if (errors.password) toast.error(errors.password.message);
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