import { useState } from 'react'
import { Header } from './components/Header';
import { Container } from './styled';
import cp from './assents/capa.jpg'
import lg from './assents/logo.jpg'
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
      <Header/>
      <Container>
        
        <div>
          <h1>Kinsui Tattoo
          <p>Supply</p>
          </h1>
          <img src={cp} height={200}/>
        </div>

        <div className='inf'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis eaque fugiat dolorum est quis iure voluptas repudiandae accusamus atque quasi corporis iusto aperiam asperiores reiciendis ullam corrupti numquam, aliquam aliquid.</p>
          <img src={lg} height={200}/>
        </div>

        <Carousel isRTL breakPoints={BREAKE_POINTS}>
    
        </Carousel>
        

      </Container>
      
    </>
  )
}

export default App;