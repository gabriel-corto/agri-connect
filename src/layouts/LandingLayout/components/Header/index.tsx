import { CaretCircleRight } from "phosphor-react";
import { HeaderContainer } from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import { Toaster } from "sonner";
import { RegisterModal } from "../../../../components/RegisterModal";

export function Header() {
  
  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <h1>Agri.<span>Connect</span> </h1>
        </div>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <CaretCircleRight weight="bold" size={24} />
              Começar Grátis
            </button>
          </Dialog.Trigger>

          <RegisterModal />
        </Dialog.Root>
      </HeaderContainer>
      
      <Toaster position="top-center"  />
    </>
  )
}