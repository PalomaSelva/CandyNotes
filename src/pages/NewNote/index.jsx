import { useState } from 'react'
import { Container, Tags } from './style'
import { EditTag } from '../../components/EditTag'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { ButtonText } from '../../components/ButtonText'

export function NewNote() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted))
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewLink('')
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }
  function handleBack() {
    navigate(-1)
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o título da nota')
    }
    if (!description) {
      return alert('Digite a descrição da nota')
    }

    if (newLink) {
      return alert(
        'Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.',
      )
    }

    if (newTag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.',
      )
    }

    alert('Nota criada com sucesso!')
    navigate(-1)

    await api.post('/notes', {
      title,
      description,
      tags,
      links,
    })
  }

  return (
    <Container>
      <Header />
      <main>
        <div className="container">
          <header>
            <h1>Criar nota</h1>

            <ButtonText text="Voltar" onClick={handleBack} />
          </header>

          <form>
            <div className="input-section">
              <Input
                placeholder="Título"
                onChange={(e) => setTitle(e.target.value)}
              />
              <Textarea
                placeholder="Observações"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <Section title="Links úteis">
              {links.map((link, index) => (
                <EditTag
                  key={index}
                  value={link}
                  onClick={() => {
                    handleRemoveLink(link)
                  }}
                />
              ))}
              <EditTag
                isNew
                placeholder="Novo Link"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
                onClick={handleAddLink}
              />
            </Section>

            <Section title="Marcadores">
              <Tags>
                {tags.map((tag, index) => (
                  <EditTag
                    key={index}
                    value={tag}
                    onClick={() => {
                      handleRemoveTag(tag)
                    }}
                  />
                ))}
                <EditTag
                  isNew
                  placeholder="Nova tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
              </Tags>
            </Section>
            <Button title="Salvar" onClick={handleNewNote} />
          </form>
        </div>
      </main>
    </Container>
  )
}
