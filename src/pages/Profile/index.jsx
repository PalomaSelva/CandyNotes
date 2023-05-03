import { Container, Avatar, ContentProfile } from "./style";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlineCamera } from "react-icons/ai";
import { FiUser,FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <IoMdArrowBack/>    
                </Link>
            </header>
            <ContentProfile>
                <Avatar>
                    <img src="https://github.com/PalomaSelva.png" alt="" />
                    <label htmlFor="avatar">
                        <AiOutlineCamera/>
                        <input 
                            htmlFor="avatar"
                            type="file"
                            />
                    </label>
                </Avatar>
                <form action="">
                    <div className="info">
                        <Input 
                        icon={FiUser} 
                        value="Paloma Selva"
                        />
                        
                        <Input 
                        icon={FiMail} 
                        value="palomaselva1@gmail.com"
                        type="email"
                        />
                    </div>
                    <div className="info">
                        <Input 
                        icon={FiLock} 
                        placeholder="Senha atual"
                        type="password"
                        />
                        
                        <Input 
                        icon={FiLock} 
                        placeholder="Nova senha"
                        type="password"
                        />

                        <Button title="Salvar"/>
                    </div>
                </form>
            </ContentProfile>
        </Container>
    )
}