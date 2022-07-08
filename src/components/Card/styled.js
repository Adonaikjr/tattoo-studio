import styled from "styled-components";

export const Container = styled.div`
margin: 0 auto;
border: solid 1px whitesmoke;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 50vh;
width: 300px;
border-radius:12px;
margin-top: 16px;
a:link{
    text-decoration: none;
    color: white;
}
h3{
    display: flex;
    align-items: center;
    svg{
        margin-right: 5px;
        color: #34af23;
    }
}
img{
    border-radius: 100%;
    width: 200px;
}
`