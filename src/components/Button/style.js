import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.DARK_PINK};
  border: none;
  padding: 1.6rem;
  border-radius: 10px;
  font-weight: 500;
  margin-top: 10px;
  display: grid;
  place-items: CENTER;
  &:disabled {
    opacity: 0.5;
  }
`
