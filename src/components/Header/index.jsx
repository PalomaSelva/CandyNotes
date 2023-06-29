import avatarPlaceholder from '../../assets/img-placeholder.svg'
import { Container, ProfileHeader, Logout } from './style'
import { MdPowerSettingsNew } from 'react-icons/md'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
export function Header() {
  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  return (
    <Container>
      <ProfileHeader to="/profile">
        <img src={avatarUrl} alt="Foto de perfil do usuário" />
        <div className="textsHeader">
          <p>Bem vinda,</p>
          <h3>{user.name}</h3>
        </div>
      </ProfileHeader>
      <Logout onClick={signOut}>
        <MdPowerSettingsNew className="icon" />
      </Logout>
    </Container>
  )
}
