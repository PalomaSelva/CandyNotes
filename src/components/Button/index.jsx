import { Container } from './style'

export function Button({ title, type = 'button', ...rest }) {
  return (
    <Container {...rest} type={type}>
      {title}
    </Container>
  )
}
