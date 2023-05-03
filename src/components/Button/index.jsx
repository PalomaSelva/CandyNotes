import { Container } from "./style";

export function Button({title="oi", loading = false , ...rest}){
    return(
        <Container 
        type="button"
        disabled={loading}
        {...rest}
        >
        {loading ? "Carregando..." : title}
        </Container>
    )
}