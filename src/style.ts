import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body{
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: #FAF8F2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;