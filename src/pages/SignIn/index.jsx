import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { FiLock, FiMail } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, TextsContent, ImageContent } from './style'
import backgroundImg from '../../assets/sign-in.png'
import { Link } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { ErrorMessage } from '../../components/errorMessage'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const method = useForm()

  const { handleSubmit } = method

  function handleSignIn() {
    signIn({ email, password })
  }

  const { signIn, errorMessage } = useAuth()

  return (
    <Container>
      <TextsContent>
        <div className="cardLogin">
          <div className="login-header">
            <h1>CandyNotes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>
          </div>

          <main>
            <h2>Faça seu login</h2>
            <FormProvider {...method}>
              <form onSubmit={handleSubmit(handleSignIn)}>
                <Input
                  icon={FiMail}
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  stateValue={setEmail}
                />
                <Input
                  icon={FiLock}
                  placeholder="Senha"
                  type="password"
                  name="password"
                  stateValue={setPassword}
                />
                {errorMessage && <ErrorMessage message={errorMessage} />}
                <Button title="Entrar" type="submit" />
              </form>
            </FormProvider>

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
