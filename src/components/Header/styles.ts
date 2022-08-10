import styled from "styled-components"

export const HeaderContainer = styled.header`
  background: ${({ theme })=> theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  height: 3.125rem;

  border: none;
  border-radius: 6px;
  background: ${({ theme })=> theme["green-500"]};

  color: ${({ theme })=> theme.white};
  font-weight: bold;

  padding: 0 1.25rem;

  cursor: pointer;

  &:hover {
    transition: all 0.2s;
    background: ${({ theme })=> theme["green-700"]};
  }
`
