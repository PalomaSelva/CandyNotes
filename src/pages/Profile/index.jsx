import { useState } from 'react'
import { Container, Avatar, ContentProfile } from './style'
import { IoMdArrowBack } from 'react-icons/io'
import { AiOutlineCamera } from 'react-icons/ai'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/img-placeholder.svg'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../components/Modal'

export function Profile() {
  const { user, updateProfile, OpenModal, errorMessage } = useAuth()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const navigate = useNavigate()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }
    const userUpdated = Object.assign(user, updated)
    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <header>
        <button onClick={handleBack}>
          <IoMdArrowBack />
        </button>
      </header>
      <ContentProfile>
        <Avatar>
          <img src={avatar} alt="Foto de perfil do usuário" />
          <label htmlFor="avatar">
            <AiOutlineCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <form action="">
          <div className="info">
            <Input
              icon={FiUser}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              icon={FiMail}
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="info">
            <Input
              icon={FiLock}
              placeholder="Senha atual"
              type="password"
              onChange={(e) => setOldPassword(e.target.value)}
            />

            <Input
              icon={FiLock}
              placeholder="Nova senha"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            {errorMessage && <div>{errorMessage}</div>}
            <Button title="Salvar" onClick={handleUpdate} />
          </div>
        </form>
      </ContentProfile>
      <Modal message="Perfil atualizado com sucesso" isOpen={OpenModal} />
    </Container>
  )
}
