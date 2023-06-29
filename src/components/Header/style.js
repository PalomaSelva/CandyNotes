import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  height: 10.6rem;
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 min(8rem, 11vw);
`

export const ProfileHeader = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > img {
    width: 7rem;
    border-radius: 50%;
  }

  .textsHeader p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  h3 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
export const Logout = styled.button`
  background-color: transparent;
  border: none;

  > .icon {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 3.6rem;
  }
`
