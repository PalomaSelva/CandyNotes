import { FiAlertTriangle } from 'react-icons/fi'
import { Container } from './style'

export function ErrorMessage({ message, ...rest }) {
  return (
    <Container {...rest}>
      <div className="icon">
        <FiAlertTriangle />
      </div>
      <span>{message}</span>
    </Container>
  )
}
