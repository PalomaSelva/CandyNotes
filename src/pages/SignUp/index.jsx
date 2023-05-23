import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button"
import { Input } from "../../components/Input";
import { Container, TextsContent, ImageContent } from "./style";
import { useState } from "react";
import backgroundImg from "../../assets/imagem-login.png"

import { Link } from "react-router-dom";

export function SignUp() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    function handleSignup() {

        if (!name || !email || !password) {
            return alert("Preencha todos os campos e tente novamente!")
        }
        
        alert("Cadastrado com sucesso!")
    }

    return(
        <Container>
            <TextsContent>
                <div className="cardLogin">
                    <div className="login-header">
                        <h1>Rocket Notes</h1>
                        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
                    </div>

                    <main>
                        <h2>
                            Faça seu login
                        </h2>
                        <form>
                            <Input
                                icon={FiUser}
                                placeholder="Nome"
                                type="text"
                                onChange={e=> setName(e.target.value)}
                            />
                            <Input
                                icon={FiMail}
                                placeholder="E-mail"
                                type="email"
                                onChange={e=> setEmail(e.target.value)}
                            />
                            <Input
                                icon={FiLock}
                                placeholder="Senha"
                                type="password"
                                onChange={e=>setPassword(e.target.value)}
                            />
                            <Button title="Cadastrar" onClick={handleSignup} />
                        </form>

                        <Link to="/" className="back-login">
                            Voltar para o login
                        </Link>
                    </main>
                </div>
            </TextsContent>
            <ImageContent>
                <img src={backgroundImg} alt="imagem de uma xícara de café, notebook, bloco de notas em cima de uma mesa" />
            </ImageContent>
        </Container>
    )
}