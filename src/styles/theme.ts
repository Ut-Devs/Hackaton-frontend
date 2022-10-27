import { createTheme } from '@nextui-org/react'
import { createGlobalStyle } from 'styled-components'

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#0FFF95',
      background: '#1c1024',
    },
  },
})

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export default GlobalStyle
