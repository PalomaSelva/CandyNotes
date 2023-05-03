import { Routes , Route } from "react-router-dom"

// importar todas as rotas
import { Home } from "../pages/Home"
import { Details } from "../pages/Details"
import { Profile } from "../pages/Profile"
import { NewNote } from "../pages/NewNote"

export function AppRoutes(){
    return(
        // o componente "Routes" vai envolver todas as rotas
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/new" element={<NewNote/>}/>
        </Routes>
    )
}
