import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");
    
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
`;
