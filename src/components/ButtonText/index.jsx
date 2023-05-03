import { Container } from "./style";

export function ButtonText({text="Sem texto", isActive = false, ...rest}){
    return(
        <Container 
        type="button"
        isActive={isActive}
        {...rest}
        >
            {text}
        </Container>
    )
}