import { useState } from 'react'
import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, TextsContent, ImageContent } from './style'
import backgroundImg from '../../assets/background-sign.png'

import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSubmit() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Cadastrado com sucesso!')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar o usuário')
        }
      })
  }

  return (
    <Container>
      <TextsContent>
        <div className="cardLogin">
          <div className="login-header">
            <h1>Rocket Notes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>
          </div>

          <main>
            <h2>Faça seu login</h2>
            <form>
              <Input
                icon={FiUser}
                placeholder="Nome"
                type="text"
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <Input
                icon={FiMail}
                placeholder="E-mail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                icon={FiLock}
                placeholder="Senha"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button title="Cadastrar" onClick={handleSubmit} />
            </form>

            <Link to="/" className="sign-link">
              Voltar para o login
            </Link>
          </main>
        </div>
      </TextsContent>
      <ImageContent>
        <img
          src={backgroundImg}
          alt="imagem de uma xícara de café, notebook, bloco de notas em cima de uma mesa"
        />
      </ImageContent>
    </Container>
  )
}
