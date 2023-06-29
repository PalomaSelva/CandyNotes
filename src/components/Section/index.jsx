import { Container } from './style'

export function Section({ title, children }) {
  return (
    <Container>
      <div className="title-style">{title}</div>
      {children}
    </Container>
  )
}
