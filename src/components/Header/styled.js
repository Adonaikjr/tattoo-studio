import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding:12px;
    ul{
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    height: 10vh;
    li{
        
        display:flex;
        flex-direction: row;
        align-items: center;
        list-style: none;
        >img{
            margin: 0 auto;
            height:90%;
            border-radius:100%;
        }
    }
}
`