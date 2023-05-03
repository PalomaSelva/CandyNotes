import { FiLock, FiMail } from "react-icons/fi";
import { Button } from "../../components/Button"
import { Input } from "../../components/Input";
import { Container, TextsContent, ImageContent } from "./style";
import backgroundImg from "../../assets/imagem-login.png"

import { Link } from "react-router-dom";

export function SignIn(){
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
                            <Input icon={FiMail} placeholder="E-mail" type="email"/>
                            <Input icon={FiLock} placeholder="Senha" type="password"/>
                            <Button title="Entrar"/>
                        </form>

                        <Link to="/register">
                            Criar conta
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