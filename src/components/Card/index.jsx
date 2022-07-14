import { Container, Content, Section, StyleButton } from './styled'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { ButtonContact } from '../ButtonContact';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
export function Card({title, ft, number, inst}){
    return(
        <Container>
            <h1>{title}</h1>
            {ft}
            <Content>
                <Section>
                    <h4><FaWhatsapp/>{number}</h4>
                    <h4><FaInstagram/>{inst}</h4>
                </Section>
                <StyleButton>
                <Link to='/kinsuiphotos'> Veja minha Arte</Link>
                </StyleButton>
                <ButtonContact/>
            </Content>
        </Container>
    )
}