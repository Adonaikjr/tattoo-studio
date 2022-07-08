import styled from 'styled-components';

export const Container = styled.button`
  height: 9vh;
  width: 12vh;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
border-radius: 12px;
  border-color: transparent;
  color: #fff;
  box-shadow: 0 0 40px 40px ${({theme}) =>theme.COLORS.BACKGROUND} inset, 0 0 0 0 white;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

:hover {
  box-shadow: 0 0 10px 0 whitesmoke inset, 0 0 10px 4px ;
  color: white;
}

`
