import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Sen', 'Roboto', sans-serif;
    background-color: #f4f6f8;
  }

  a {
    textDecoration: 'none'
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: rgb(30, 29, 41);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(151, 146, 237);
    border-radius: 10px;
    border: 3px solid rgb(30, 29, 41);
  }
`
