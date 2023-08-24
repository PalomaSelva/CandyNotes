import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.COLORS.HOT_PINK_300};
  padding: 0 1rem;
  width: 100%;
  .icon {
    font-size: 16px;
    width: 16px;
  }
`
