import { Container } from './style'

export function Input({ icon: Icon, register, name, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <input {...(register && { ...register(name) })} {...rest} />
    </Container>
  )
}
