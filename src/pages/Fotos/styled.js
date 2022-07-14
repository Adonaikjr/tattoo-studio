import styled from "styled-components";

export const Container = styled.div`


`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    img{
        box-shadow: 10px 5px 5px black;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 5px;
    }
    h2{
        margin-bottom: 16px;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`