import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
   
    body{
        padding:0 4vw;
        margin:0;
        font-size:16px;
        font-family: Arial, Helvetica, sans-serif,"Nanum Gothic";
        font-weight: 400;
        font-style: normal;
    }
    *{
        box-sizing:border-box;
    }

    html, body{
        -webkit-text-size-adjust : none;  /* 크롬, 사파리, 오페라 신버전 */
        -ms-text-size-adjust : none;  /* IE */
        -moz-text-size-adjust : none;  /* 파이어폭스 */
        -o-text-size-adjust : none;  /* 오페라 구버전 */
    }

    a{text-decoration:none}

`;

export default GlobalStyle;
