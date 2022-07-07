import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding:12px;
    ul{
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    height: 7vh;
    li{
        display:flex;
        align-items: center;
        list-style: none;
        >img{
            height:120%;
            border-radius:100%;
            box-shadow: 0 0 1em whitesmoke;
        }
    }
}
`