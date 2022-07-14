import { Container ,Main} from "./styled";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
//img
import img1 from '../../assents/tattoo1.jpg'
import img2 from '../../assents/tattoo2.jpg'
import img3 from '../../assents/tattoo3.jpg'

import img5 from '../../assents/tattoo5.jpg'
import img6 from '../../assents/tattoo6.jpg'
import img7 from '../../assents/tattoo7.jpg'
import img8 from '../../assents/tattoo8.jpg'
import img9 from '../../assents/tattoo9.jpg'
import img10 from '../../assents/tattoo10.jpg'
import img11 from '../../assents/tattoo11.webp'
import img12 from '../../assents/tattoo12.webp'
import img13 from '../../assents/tattoo13.jpg'
import img14 from '../../assents/tattoo14.jpg'
import img15 from '../../assents/tattoo15.jpg'

//fim img
export function Fotos(){
    return(
        <Container>
            <Header/>
            <Main>
            <h2>Adonai Kinsui</h2>
                <div>
                <img src={img1} width={200} />
                <img src={img2} width={200} height={200} />
                <img src={img3} width={200} height={200} />
                </div>
                <div>
                <img src={img5} width={200} />
                <img src={img6} width={200} />
                <img src={img7} width={200} />
                </div>
                <div>
                <img src={img8} width={200} />
                <img src={img9} width={200} />
                <img src={img10} width={200} />
                </div>
                <div>
                <img src={img11} width={200} />
                <img src={img12} width={200} />
                <img src={img13} width={200} />
                </div>
                <div>
                <img src={img14} width={200} />
                <img src={img15} width={200} />
                </div>

            </Main>
            <Footer/>
        </Container>
    )
}