import { CaretCircleRight } from "phosphor-react";
import { OnBoardingModal } from "../OnBoardingModal";

import { HeaderContainer } from "./style";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <HeaderContainer>
      <div className="logo">
        <h1>Agri-<span>Connect</span> </h1>
      </div>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            <CaretCircleRight weight="bold" size={24} />
            Começar Grátis
          </button>
        </Dialog.Trigger>

        <OnBoardingModal />
      </Dialog.Root>
    </HeaderContainer>
  )
}