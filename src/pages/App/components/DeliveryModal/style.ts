import { styled } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog"

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.70);
`
export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme.white};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Title = styled(Dialog.Title)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 1.3rem;
  }

  button {
    background: transparent;
    color: ${props => props.theme["gray-900"]};
    border: 0;
    cursor: pointer;
  }
`
export const Description = styled(Dialog.Description) `
  form {
    width: 100%;
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
`
export const InputSeparator = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
    font-size: 0.95rem;
    gap: 0.5rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    font-size: 0.95rem;
    border-radius: 8px;
    border: 1px solid ${props => props.theme["gray-900"]};
  }

  #address, #transport{
    flex: 1;
  }

  button {
    padding: 1rem;
    border: 0;

    width: 100%;
    display: flex;
    align-items: center;
    font-size: 0.95rem;
    font-weight: bold;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 8px;

    color: ${props => props.theme.white};
    background: ${props => props.theme["green-300"]};

    &:hover {
      cursor: pointer;
      background: ${props => props.theme["green-500"]};
    }
  }
`
export const InputGrid = styled.div`
  display: flex;
  flex-direction: column;
`