import styled from "styled-components";

export const Container = styled.div`
margin: 0 auto;
border: solid 1px whitesmoke;


display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 82vh;
width: 300px;
border-radius:12px;
margin-top: 16px;
a:link{
    text-decoration: none;
    color: white;
}

img{
    border-radius: 100%;
    width: 200px;
    
}
`

export const Content = styled.div`
  
    display: flex;
    flex-direction: column;
    height: 20rem;
    justify-content: space-around;
`
export const Section = styled.section`
  
    display: flex;
    flex-direction: column;
    height: 8vh;
    justify-content: space-evenly;
    align-items: center;
    h4{
        display: flex;
        align-items: center;
       svg{
        margin-right: 5px;
       }
    }
`

export const StyleButton = styled.button`
height: 3rem;
border-radius: 12px;
border: none;
background: ${({theme}) => theme.COLORS.WHITE};
box-shadow: 2px 2px 2px black;
`