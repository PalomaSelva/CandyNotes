import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Container, Logo, Menu, Search, Content, NewNote } from './style'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [search, setSearch] = useState('')
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    // limpar todos os filtros ao clicar em "todos"
    if (tagName === 'all') {
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName)
      setTagsSelected(filteredTags)
    } else {
      setTagsSelected((prevState) => [...prevState, tagName])
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagsSelected}`,
      )
      setNotes(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search]) // o useEffect vai rodar toda vez que o estado desses 2 for alterado

  return (
    <Container>
      <Logo>
        <h2>CandyNotes</h2>
      </Logo>

      <Menu>
        <li>
          <ButtonText
            text="Todos"
            onClick={() => handleTagSelected('all')}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                text={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)} // para saber se o tag.name está dentro da tag selecionada. Se a tag existir lá dentro, vai retornar um, valor verdadeiro
              />
            </li>
          ))}
      </Menu>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>

      <Header />

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          stateValue={setSearch}
        />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <div className="Notes-section">
            {notes.map((note) => (
              <Note
                key={note.id}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))}
            {/* chaves para dizer q é um objeto */}
          </div>
        </Section>
      </Content>
    </Container>
  )
}
