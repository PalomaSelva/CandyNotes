import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./style";

export function EditTag({isNew, onClick, value, ...rest}){
    return(
        <Container isNew={isNew}>
            <input 
            type="text"
            value={value}
            readOnly={!isNew}
            {...rest}
            />

            <button 
            type="button"
            onClick={onClick}>
                {isNew ? <FiPlus/> : <FiX/> }
            </button>

        </Container>
    )
}