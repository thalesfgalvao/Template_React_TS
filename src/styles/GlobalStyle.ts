import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }
    body{
        background-color: #282c34;
        font-family: 'Roboto', sans-serif;
    }
`
