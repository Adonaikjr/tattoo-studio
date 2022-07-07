import { Button } from "../Button";
import { Container } from "./styled";
import lg from '../../assents/logo.jpg'
export function Header() {
    return (
        <Container>
            <ul>
                <li> <Button title='Home' /></li>
                <li> <Button title='Contato' /></li>
                <li> <img src={lg}/> </li>
                <li> <Button title='Fotos' /></li>
                <li> <Button title='Login' /></li>
            </ul>
        </Container>
    )
}