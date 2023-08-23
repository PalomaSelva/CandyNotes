import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Container } from './style'
import { FiCheckCircle } from 'react-icons/fi'

export function Modal({ isOpen = false, message }) {
  return (
    <Container isOpen={isOpen}>
      <div className="modal-wrapped">
        <div className="line-progress"></div>
        <div className="modal-icon">
          <FiCheckCircle />
        </div>
        <div className="text">{message}</div>
      </div>
    </Container>
  )
}
