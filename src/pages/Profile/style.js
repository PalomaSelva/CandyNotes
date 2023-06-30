import styled from 'styled-components'

export const Container = styled.div`
  header {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    height: 14.4rem;
    padding: 0 min(10%, 14.8rem);
    display: flex;
    align-items: center;

    button {
      background: none;
      border: none;
    }
    svg {
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
  a {
    svg {
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`

export const ContentProfile = styled.div`
  width: clamp(30rem, 80%, 38rem);
  margin: 0 auto;
  position: relative;
  top: -9rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 2.2rem;

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }
  }
`

export const Avatar = styled.div`
  width: fit-content;
  margin: 0 auto;

  img {
    border-radius: 100%;
    width: 17.6rem;
    height: 17.6rem;
  }

  label {
    width: 4.8rem;
    height: 4.8rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    position: relative;
    top: -5.2rem;
    left: 73%;
    cursor: pointer;

    input {
      display: none;
    }
    svg {
      font-size: 2.2rem;
    }
  }
`
