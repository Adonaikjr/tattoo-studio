import styled from 'styled-components';

export const Container = styled.button`
width: 100%;
height: 100%;
cursor: pointer;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  border-radius: 12px;
  border-color: transparent;
  color: ${({theme})=> theme.COLORS.WHITE};
  font-size: 17px;
  

`
