import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { FiLock, FiMail } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, TextsContent, ImageContent } from './style'
import backgroundImg from '../../assets/background-sign.png'
import { Link } from 'react-router-dom'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignIn() {
    if (!email || !password) {
      return alert('Preencha todos os campos!')
    }
    signIn({ email, password })
  }

  const { signIn } = useAuth()

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
              <Button title="Entrar" onClick={handleSignIn} />
            </form>

            <Link to="/register" className="sign-link">
              Criar conta
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
