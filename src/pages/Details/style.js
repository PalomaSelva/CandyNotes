import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.6rem auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    padding-top: 3.4rem;
    overflow-y: auto;
  }
`

export const Links = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4em;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`

export const Content = styled.div`
  max-width: 65rem;
  margin: 0 auto;
  gap: 4.5rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  > button:first-child {
    text-align: end;
  }

  > .texts {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

  > .sections {
    display: flex;
    flex-direction: column;
    gap: 2.8rem;
  }
`
