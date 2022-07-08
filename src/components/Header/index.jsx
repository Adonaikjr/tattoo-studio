import { Button } from "../Button";
import { Container } from "./styled";
import lg from '../../assents/logo.jpg'

import { Link } from 'react-router-dom'
 
export function Header() {
    return (
        <Container>
            <ul>
                <li> <Link to='/'><Button title='Home' /></Link></li>
                <li> <Link to='/contact'><Button title='Contato'/></Link></li>
                <li><img src={lg} /></li>
                <li> <Button title='Fotos'/></li>
                <li> <Button title='Login'/></li>
            </ul>
        </Container>
    )
}