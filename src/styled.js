import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height:80vh;

margin: 0 auto;
padding: 0 auto;
    >div{
        >h1{
            color: white;
            text-shadow: 1px 1px 2px black, 0 0 1em orangered, 0 0 0.2em black;
            height:200px;
            width: 100%;
            position:absolute;
            z-index:1;
            display: flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
            font-family: 'Miltonian Tattoo', cursive;

            p{
                font-size:16px;
            }
        }
        >img{
            width: 100%;
            margin-top: 5px;
            border-radius: 5px;
            mask-image: linear-gradient(to top, transparent 5%, black 50% );
    	    background-image:('./assents/capa.jpg');
        }
    }

`

export const Section = styled.section`
    display: flex;
    p{
        margin: 12px;
        text-shadow: 0 0 1rem white;
        display: flex;
        align-items:center;
        text-align:center;
    }
    >img{
        width: 220px;
        height:220px;
        border-radius:5px;
    
}
`

export const Footer = styled.footer`
margin: 10px;

`
