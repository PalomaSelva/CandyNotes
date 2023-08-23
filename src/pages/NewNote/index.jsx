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
import { Modal } from '../../components/Modal'
import { ErrorMessage } from '../../components/errorMessage'

export function NewNote() {
  const [OpenModal, setOpenModal] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  const [message, setMessage] = useState({})

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted))
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }
  function handleBack() {
    navigate(-1)
  }

  async function handleNewNote() {
    if (!title) {
      setMessage(() => {
        return {
          title: 'Digite o título da nota.',
        }
      })

      return
    }
    if (!description) {
      setMessage(() => {
        return {
          description: 'Digite a descrição da nota.',
        }
      })

      return
    }

    if (newLink) {
      setMessage(() => {
        return {
          link: 'Você deixou um link no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.',
        }
      })

      return
    }

    if (newTag) {
      return alert(
        'Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.',
      )
    }

    setOpenModal(true)
    setTimeout(() => {
      setOpenModal(false)
      navigate(-1)
    }, 2100)

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
              {message.title && <ErrorMessage message={message.title} />}
              <Textarea
                placeholder="Observações"
                onChange={(e) => setDescription(e.target.value)}
              />
              {message.description && (
                <ErrorMessage message={message.description} />
              )}
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
              {message.link && <ErrorMessage message={message.link} />}
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
      <Modal message="Nota criada com sucesso!" isOpen={OpenModal} />
    </Container>
  )
}
