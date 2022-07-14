import styled from "styled-components";

export const Container = styled.footer`

height: 20vh;

img{
    width: 100%;
    margin-top: 5vh;
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
}


`
export const Content = styled.div`
height: 10vh;
`

export const Section = styled.section`
display: flex;
justify-content: space-between;
align-items: center ;
h4{
    font-family: Roboto;
font-size: 20px;
letter-spacing: 0em;
text-align: left;

}
p{
    margin-right: 16px;
}
svg{
    margin-left: 16px;
    margin-right: 16px;

}

height: 10vh;
`