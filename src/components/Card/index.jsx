import { Container } from './styled'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { ButtonContact } from '../ButtonContact';

export function Card({title, ft, number}){
    return(
        <Container>
            <h1>{title}</h1>
            {ft}
            <h3><FaWhatsapp/>{number}</h3>
            <h3><FaInstagram/>@adonaikinsui</h3>
            <ButtonContact/>

        </Container>
    )
}