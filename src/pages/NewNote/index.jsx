import { useState } from 'react'
import { Container, Tags } from './style'
import { ButtonText } from '../../components/ButtonText'
import { EditTag } from '../../components/EditTag'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
export function NewNote() {
  const [links, useLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink])
    setNewLinks('')
  }
  return (
    <Container>
      <Header />
      <main>
        <div className="container">
          <header>
            <h1>Criar nota</h1>
            <Link className="link" to="/">
              Voltar
            </Link>
          </header>

          <form>
            <div className="input-section">
              <Input placeholder="Título" />
              <Textarea placeholder="Observações" />
            </div>

            <Section title="Links úteis">
              <EditTag isNew placeholder="Novo Link" value={newLink}/>
            </Section>

            <Section title="Marcadores">
              <Tags>
                <EditTag value="react.js" />
                <EditTag isNew placeholder="Nova tag" />
              </Tags>
            </Section>
            <Button title="Salvar" />
          </form>
        </div>
      </main>
    </Container>
  )
}
