import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding: 1.2rem 1.4rem;
  height: 5.6rem;
  border-radius: 1rem;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  width: 100%;
  input {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
  }

  /* Cor de fundo do autocomplete */
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.COLORS.BACKGROUND_900}
      inset;
  }
  /* Cor do texto do autocomplete */
  input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.COLORS.WHITE};
  }
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
