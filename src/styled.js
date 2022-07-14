import styled from "styled-components";

export const Container = styled.main`
margin: 0 auto;
padding: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;

`

export const Section = styled.section`
    display: flex;

    margin-bottom: 4rem;
    >img{
        width: 220px;
        height:220px;
        border-radius:5px;

    }
  
`
export const Content = styled.div`
      
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin: 12px;
        text-shadow: 0 0 1rem white;
        display: flex;
        align-items:center;
        text-align:center;
      

    
`

export const Footer = styled.footer`
margin: 10px;

`
export const Main = styled.main`
    h1{
        height: 25vh;
        margin-left: 10vh;
        color: white;
        text-shadow: 1px 1px 2px black, 0 0 1em orangered, 0 0 0.2em black;
        position: absolute;
        z-index: 1;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        font-weight: 300px;
        p{
            font-size:16px;
        }
    }

    img{
        width: 100%;
        margin-top: 5px;
        border-radius: 5px;
        mask-image: linear-gradient(to top, transparent 5%, black 50% );
    	background-image:('./assents/capa.jpg');
    }
`

export const Border = styled.div`
img{
    width: 100%;
    margin-top: 16px;
    margin-bottom: 16px;
}

`