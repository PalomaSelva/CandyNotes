import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;

  grid-template-areas:
    'logo header'
    'menu search'
    'menu content'
    'newnote content';

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Logo = styled.div`
  grid-area: logo;
  display: grid;
  place-items: center;
  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  h2 {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.56) 3.65%,
      rgb(239, 208, 221) 14.06%,
      rgb(236, 198, 206) 29.17%,
      rgb(240, 202, 209) 48.44%,
      rgb(239, 151, 182) 73.44%
    );
    background-clip: text;
    color: transparent;
  }
`

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding: 6.3rem;
  list-style: none;

  > li {
    text-align: center;
    margin-bottom: 2.2rem;
  }
`

export const Search = styled.div`
  grid-area: search;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 8rem;
`

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;
  padding: 0 8rem;
`

export const NewNote = styled(Link)`
  grid-area: newnote;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`
