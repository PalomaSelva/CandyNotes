import { useState } from 'react'
import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container, TextsContent, ImageContent } from './style'
import backgroundImg from '../../assets/background-sign.png'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { Modal } from '../../components/Modal'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import YupPassword from 'yup-password'
import { ErrorMessage } from '../../components/errorMessage'

export function SignUp() {
  YupPassword(yup)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [OpenModal, setOpenModal] = useState(false)

  const navigate = useNavigate()

  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório.'),
      email: yup
        .string()
        .required('O e-mail é obrigatório.')
        .email('Formato de E-mail inválido'),
      password: yup
        .string()
        .required('A senha é obrigatória.')
        .min(8, 'A senha deve conter pelo menos 8 caracteres.')
        .minLowercase(1, 'A senha deve conter pelo menos uma letra minúscula.')
        .minUppercase(1, 'A senha deve conter pelo menos uma letra maiúscula.')
        .minNumbers(1, 'A senha deve conter pelo menos um número.')
        .minSymbols(
          1,
          'A senha deve conter pelo menos um caractere especial (por exemplo, !@#$%^&*()).',
        ),
    })
    .required()

  const methods = useForm({
    criteriaMode: 'all',
    resolver: yupResolver(schema),
  })

  const {
    handleSubmit,
    formState: { errors },
  } = methods
  console.log(errors.email)
  function signUp(data) {
    console.log(data)

    api
      .post('/users', { name, email, password })
      .then(() => {
        setOpenModal(true)
        setTimeout(() => {
          setOpenModal(false)
          navigate('/')
        }, 3100)
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
            <h1>CandyNotes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>
          </div>

          <main>
            <h2>Crie sua Conta</h2>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(signUp)}>
                <Input
                  icon={FiUser}
                  name="name"
                  placeholder="Nome"
                  type="text"
                  stateValue={setName}
                />
                {errors.name && <ErrorMessage message={errors.name.message} />}
                <Input
                  icon={FiMail}
                  name="email"
                  placeholder="E-mail"
                  type="email"
                  stateValue={setEmail}
                />
                {errors.email && (
                  <ErrorMessage message={errors.email.message} />
                )}
                <Input
                  icon={FiLock}
                  name="password"
                  placeholder="Senha"
                  type="password"
                  stateValue={setPassword}
                />
                {errors.password?.types &&
                  Object.entries(errors.password?.types).map(
                    ([type, message]) => (
                      <ErrorMessage key={type} message={message} />
                    ),
                  )}

                <Button title="Cadastrar" type="submit" />
              </form>
            </FormProvider>
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
      <Modal message="Cadastrado com sucesso!" isOpen={OpenModal} />
    </Container>
  )
}
