import { Routes, Route } from 'react-router-dom'
import App from '../App'
import { Contact } from '../pages/Contato'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    )
}