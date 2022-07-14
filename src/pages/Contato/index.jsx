import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container} from "./styled";
import perfil1 from '../../assents/perfil01.jpg';
import lg from '../../assents/logo.jpg'
import { Button } from "../../components/Button";
export function Contact(){

    return(
      <Container>        
        <Header/>
        <Card title='Adonai Kinsui' ft={ <img src={lg}/> } number='(11) 96533-2160' inst='@adonaikinsui'/>
       
      </Container>  
    )
}