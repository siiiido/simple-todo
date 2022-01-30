import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  body{
    margin: 0;
    width: 100vw;
    height: 100vh;
    background-color: #B4B8BD;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;
