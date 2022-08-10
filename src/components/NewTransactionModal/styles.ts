import * as RadioGroup from '@radix-ui/react-radio-group'
import * as Dialog from '@radix-ui/react-dialog'
import styled from "styled-components"

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0 ,0 ,0 ,0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  padding: 2.5rem 3rem;
 
  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-800']};
 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme['gray-900']};

      color: ${({ theme }) => theme['gray-300']};

      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }
    }

    button[type="submit"] {
      height: 3.625rem;

      border: none;
      border-radius: 6px;
      background: ${({ theme }) => theme["green-500"]};

      color: ${({ theme }) => theme.white};
      font-weight: bold;

      padding: 0 1.25rem;
      margin-top: 1.5rem;

      cursor: pointer;

      &:hover {
        transition: all 0.2s;
        background: ${({ theme }) => theme["green-700"]};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: none;

  top: 1.5rem;
  right: 1.5rem;

  color: ${({ theme }) => theme["gray-500"]};
  line-height: 0;
  cursor: pointer;

`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${({ theme }) => theme['gray-700']};
  border: 0;
  border-radius: 6px;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;

  color: ${({ theme }) => theme['gray-300']};

  
  svg {
    color: ${({ theme, variant }) => variant === "income" ? theme['green-300'] : theme['red-300']};
  }
  
  &[data-state="unchecked"]:hover {
    transition: all 0.15s;
    background: ${({ theme }) => theme['gray-600']};
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme.white};
    
    background: ${({ variant, theme }) => variant === "income" ? theme['green-300'] : theme['red-300']};
    box-shadow: none;

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`
