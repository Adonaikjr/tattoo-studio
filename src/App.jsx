import { useState } from 'react'
import { Header } from './components/Header';
import { Container, Section, Footer, Main } from './styled';


//imagens 
import cp from './assents/capa.jpg'
import lg from './assents/logo.jpg'
import img1 from './assents/img1.jpg'
import img2 from './assents/img2.jpg'
import img4 from './assents/img4.jpg'
import img5 from './assents/img5.jpg'
//fim imagem
import Carousel from 'react-elastic-carousel';


function App() {
  const [count, setCount] = useState(0)

  const BREAKE_POINTS = [
    {width: 1, itemToShow:1},
    {width: 550, itemToShow: 2, ItemtoScroll:2},
    {width: 768, itemToShow:3},
    {width: 1200, itemToShow:4}
  ]


  const [Items, setItems] = useState([1, 2, 3, 4, 5, 6])
  const ADD_ITEM = () =>{
    const NEXT_ITEM = Math.max(1, Items.length + 1)
    setItems([...Items, NEXT_ITEM])
  }

  return (
    <>

      <Container>
      <Header/>

        <Main>
          <h1>Kinsui Tattoo
          <p>Supply</p>
          </h1>
          <img src={cp} height={200}/>
        </Main>

        <Section>
          <p>
            <h4>Studio</h4>
            <h2>Quem somos</h2>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis eaque fugiat dolorum est quis iure voluptas repudiandae accusamus atque quasi corporis iusto aperiam asperiores reiciendis ullam corrupti numquam, aliquam aliquid.
          </p>
          <img src={lg} height={200}/>
        </Section>

        <h3>Ultimas Tatuagens</h3>
        <Carousel isRTL breakPoints={BREAKE_POINTS}>
          <img src={img1} alt="img1" height={300} />
          <img src={img2} alt="img2" height={300} />  
          <img src={img4} alt="img4" height={300} />  
          <img src={img5} alt="img5" height={300} />
        </Carousel>
   

      </Container>
      
    </>
  )
}

export default App;