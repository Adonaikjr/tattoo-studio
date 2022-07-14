import styled from "styled-components";

export const Container = styled.button.attrs({
    type:'submit'
})`

height: 7vh;
padding: 12px;
border-radius: 12px;
border:transparent;

a{
    font-size: 14px;
}
a:link{
    text-decoration: none;

}
a:hover{
    text-decoration: underline;
}
background: ${({theme}) => theme.COLORS.WHITE};

box-shadow: 2px 2px 2px black;
`