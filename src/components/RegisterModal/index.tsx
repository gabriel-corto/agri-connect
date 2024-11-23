import * as Dialog from "@radix-ui/react-dialog";
import { Content, Description, InputSeparator, Overlay, Title } from "./style";
import { CaretCircleRight, X } from "phosphor-react";

export function RegisterModal() {
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
          <form>
            <InputSeparator>
              <input 
                type="text" 
                placeholder="Nome completo" 
              />
              <input type="text" 
                placeholder="Endereço de e-mail" 
              />
            </InputSeparator>

            <InputSeparator>
              <input 
                type="text" 
                placeholder="Endereço da fazenda" 
              />
              <input 
                type="text" 
                placeholder="Tipo de Produto"
                list="items-suggestions" 
              />
            </InputSeparator>
            
            <datalist id="items-suggestions">
              <option>Frutas</option>
              <option>Vegetais</option>
              <option>Grãos</option>
              <option>Outros</option>
            </datalist>

            <InputSeparator>
              <input type="text" placeholder="Crie uma Senha" />
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