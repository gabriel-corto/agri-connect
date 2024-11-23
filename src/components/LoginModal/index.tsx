import * as Dialog from "@radix-ui/react-dialog";
import { X, SignIn } from "phosphor-react";
import { Content, Description, InputSeparator, Overlay, Title } from "./style";

export function LoginModal() {
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
          <form>
            <InputSeparator>
              <input 
                type="email" 
                placeholder="Digite seu e-mail" 
              />
            </InputSeparator>

            <InputSeparator>
              <input type="text" placeholder="Digite a sua Senha" />
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