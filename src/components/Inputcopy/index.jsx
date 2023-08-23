import { useFormContext } from 'react-hook-form'
import { Container } from './style'

export function Input({ icon: Icon, ...rest }) {
  const { register } = useFormContext()

  return (
    <Container>
      {Icon && <Icon />}
      <input
        {...register(name)}
        {...rest}
        onChange={(e) => {
          register(name).onChange(e) // Manually update the input value
          stateValue(e.target.value) // Update the state value if needed
        }}
      />
    </Container>
  )
}
