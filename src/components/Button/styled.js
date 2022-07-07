import styled from 'styled-components';

export const Container = styled.button`
  height: 5vh;
  width: 8vh;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
border-radius: 12px;
  border-color: transparent;
  color: #fff;
  box-shadow: 0 0 40px 40px black inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

:hover {
  box-shadow: 0 0 10px 0 whitesmoke inset, 0 0 10px 4px rgb(144, 74, 43);
  color: white;
}

`
