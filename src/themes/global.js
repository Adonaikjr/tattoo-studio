
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        max-width: 77.5vh;
      background: ${({ theme }) => theme.COLORS.BACKGROUND};
       color:whitesmoke;
    }
`