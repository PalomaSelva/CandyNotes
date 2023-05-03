import { Container, ProfileHeader, Logout } from "./style";
import { MdPowerSettingsNew } from "react-icons/md";
export function Header(){
    return(
        <Container>
            <ProfileHeader to="/profile">
                <img src="https://github.com/palomaselva.png" alt="Foto de perfil do usuário" />
                <div className="textsHeader">
                    <p>Bem vinda,</p>
                    <h3>Paloma Selva</h3>
                </div>
            </ProfileHeader>
            <Logout>
                <MdPowerSettingsNew className="icon"/>
            </Logout>
        </Container>
    )
}