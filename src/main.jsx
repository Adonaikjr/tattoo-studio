import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './themes/global'
import { ThemeProvider } from 'styled-components'
import theme from './themes/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)