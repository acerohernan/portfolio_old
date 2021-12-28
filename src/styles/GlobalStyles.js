import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        background-color: #191919;
        padding: 60px 5vw;
        color: white;
        @media (min-width: 800px){
            padding: 60px 5vw 0px 100px;
        }  
    }

    a{
        text-decoration: none;
        color: black;
    }

    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;
