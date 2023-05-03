import { Container } from "./style";
export function Input({icon: Icon, ...rest }){
    return(
        <Container>
            {Icon && <Icon/>} {/* significa que ele não vai exigir um ícone. Se não tiver, a aplicação vai rodar igualmente e vai ignorar essa linha*/}
            <input {...rest} />
        </Container>
    )
}