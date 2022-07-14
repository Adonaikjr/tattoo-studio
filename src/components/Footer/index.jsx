import { Container, Content, Section } from "./styled";
import border from '../../assents/border.svg'
import { FaPaintBrush } from 'react-icons/fa'
export function Footer(){
    return(
        <Container>
        <img src={border} alt="bdr"/>
        <Content>
            <Section>
                <h4><FaPaintBrush/> Kinsui Tattoo <FaPaintBrush/></h4>
                <p>© 2022 - Todos os direitos reservados.</p>
            </Section>
        </Content>
        </Container>
    )
}