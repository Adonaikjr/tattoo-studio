
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        height: 100vh;
        margin: 0 auto;
        padding: 0 auto;
        max-width: 100vh;
      background: ${({ theme }) => theme.COLORS.BACKGROUND};
       color:whitesmoke;
    }
`