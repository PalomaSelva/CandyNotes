import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    'header'
    'content';
  main {
    grid-area: content;
    overflow-y: auto;
    padding: 0 1rem;

    .container {
      width: clamp(34rem, 60%, 60rem);
      margin: 4rem auto;
      display: flex;
      flex-direction: column;
      gap: 2.8rem;
    }
    header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      font-weight: 500;
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    .input-section {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }

    form div:nth-child(2) label:not(:last-child) {
      margin-bottom: 1.6rem;
    }

    form div:nth-child(3) label:not(:last-child) {
      margin-bottom: 0;
    }
  }
`
export const Tags = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  label {
    width: 48%;
  }
`
