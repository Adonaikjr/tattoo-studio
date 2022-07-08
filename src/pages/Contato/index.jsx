import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container} from "./styled";
import perfil1 from '../../assents/perfil01.jpg';

export function Contact(){

    return(
      <Container>        
        <Header/>
        <Card title='Adonai Kinsui' ft={ <img src={perfil1}/> } number='(11) 96533-2160'/>
      </Container>  
    )
}