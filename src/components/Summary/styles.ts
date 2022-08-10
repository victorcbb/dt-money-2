import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 70rem;

  margin: -5rem auto 0;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${({ theme }) => theme["gray-600"]};
  border-radius: 6px;

  padding: 2rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    span {
      color: ${({ theme }) => theme["gray-300"]};
    }

  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${({ variant, theme  }) => variant === "green" && css`
    background-color: ${theme["green-700"]};
  `}
`
