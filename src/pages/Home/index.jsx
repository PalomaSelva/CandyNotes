import { FiPlus } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Container, Logo, Menu, Search, Content, NewNote } from './style'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home() {
  return (
    <Container>
      <Logo>
        <h2>RocketNotes</h2>
      </Logo>

      <Menu>
        <li>
          <ButtonText text="Todos" isActive />
        </li>
        <li>
          <ButtonText text="Frontend" />
        </li>
        <li>
          <ButtonText text="Nodejs" />
        </li>
        <li>
          <ButtonText text="React" />
        </li>
      </Menu>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>

      <Header />

      <Search>
        <Input placeholder="Pesquisar pelo título" type="text" />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <div className="Notes-section">
            <Note
              data={{
                title: 'Introdução ao React',
                tags: [
                  { id: 1, name: 'React' },
                  { id: 2, name: 'Modal' },
                ],
              }}
            />{' '}
            {/* chaves para dizer q é um objeto */}
            <Note
              data={{
                title: 'Props React',
                tags: [
                  { id: 1, name: 'React' },
                  { id: 2, name: 'Props' },
                  { id: 3, name: 'Css-in-Js' },
                ],
              }}
            />{' '}
            {/* 2 chaves para dizer q é um objeto */}
            <Note
              data={{
                title: 'React Modal',
                tags: [
                  { id: 1, name: 'React' },
                  { id: 2, name: 'Modal' },
                ],
              }}
            />{' '}
            {/* 2 chaves para dizer q é um objeto */}
          </div>
        </Section>
      </Content>
    </Container>
  )
}
