import styled from 'styled-components'

export const Container = styled.div`
  overflow-y: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
`

export const TextsContent = styled.div`
  width: 120rem;

  .cardLogin {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    align-items: center;
    width: clamp(30rem, 80%, 46rem);
    padding: 0 2rem;
  }

  .login-header {
    h1 {
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

      text-align: center;
    }
    p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 1.6rem;
      text-align: center;
    }
  }

  main {
    width: 100%;
    h2 {
      text-align: center;
      margin-bottom: 2.8rem;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
    }
  }
`

export const ImageContent = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: brightness(80%);
  }
`
