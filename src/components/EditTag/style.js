import styled from 'styled-components'

export const Container = styled.label`
  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: ${({ isNew }) => (isNew ? '2px dashed #666360' : 'none')};
  padding: 1.2rem 1.4rem;
  border-radius: 1rem;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  button {
    background: none;
    border: none;

    svg {
      color: ${({ theme, isNew }) => (isNew ? theme.COLORS.PINK : 'red')};
    }
  }
`
