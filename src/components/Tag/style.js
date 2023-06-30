import styled from 'styled-components'

export const Container = styled.div`
  display: inline-block;
  margin-right: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
  font-size: 1.2rem;
`
