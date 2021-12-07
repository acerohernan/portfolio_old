import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body{
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        background-color: #F6F7F9;
        padding: 60px 5vw;
        @media (min-width: 800px){
            padding: 60px 5vw 0px 100px;
        }  
    }

    button{
        cursor: pointer;
    }
`;

export default GlobalStyle;
