import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: 100%;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
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
