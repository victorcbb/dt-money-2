import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    border-radius: 6px;
    border: none;
    background: ${({ theme }) => theme['gray-900']};

    padding: 1rem;
    color: ${({ theme }) => theme['gray-300']};

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    border: 1px solid ${({ theme }) => theme['green-300']};
    border-radius: 6px;
    background: transparent;

    padding: 0 2rem;

    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;

    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['green-500']};
      border-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};

      transition: all 0.2s;
    }
  }
`
