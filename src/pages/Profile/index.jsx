import { useState } from 'react'
import { Container, Avatar, ContentProfile } from './style'
import { IoMdArrowBack } from 'react-icons/io'
import { AiOutlineCamera } from 'react-icons/ai'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    }

    await updateProfile({ user })
  }
  return (
    <Container>
      <header>
        <Link to="/">
          <IoMdArrowBack />
        </Link>
      </header>
      <ContentProfile>
        <Avatar>
          <img src="https://github.com/PalomaSelva.png" alt="" />
          <label htmlFor="avatar">
            <AiOutlineCamera />
            <input htmlFor="avatar" type="file" />
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

            <Button title="Salvar" onClick={handleUpdate} />
          </div>
        </form>
      </ContentProfile>
    </Container>
  )
}
