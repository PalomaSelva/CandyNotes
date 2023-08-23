import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.56);
  position: absolute;
  top: 0;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};
  place-items: center;

  .modal-wrapped {
    background-color: white;
    height: 17rem;
    width: 46rem;
    display: flex;
    gap: 1.2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    position: relative;
    border-radius: 6px;

    .line-progress {
      height: 0.6rem;
      width: 100%;
      position: absolute;
      top: 0;
      border-radius: 6px 6px 0 0;
      background-color: ${({ theme }) => theme.COLORS.HOT_PINK};
      animation: progress 3s linear forwards;
    }
    .close-modal-icon {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
      position: absolute;
      right: 1.3rem;
      top: 1.3rem;
      background-color: transparent;
      border: none;
    }

    .modal-icon {
      font-size: 3.6rem;
      color: ${({ theme }) => theme.COLORS.HOT_PINK};
      border: 2px solid ${({ theme }) => theme.COLORS.HOT_PINK};
      display: grid;
      place-items: center;
      width: 5.8rem;
      height: 5.8rem;
      border-radius: 50%;
    }

    .text {
      font-size: 2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }

    @keyframes progress {
      from {
        width: 0%;
      }

      to {
        transform: 100%;
      }
    }
    @keyframes closeModal {
      from {
        display: grid;
      }

      to {
        display: none;
      }
    }
  }
`
