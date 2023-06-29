import { Container } from './style'
import { Tag } from '../Tag'
export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} text={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
