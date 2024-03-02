import { Global, css } from "@emotion/react";

const globalStyles = css`
  //전역 스타일 설정
  body {
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    padding: 0 4vw;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  table {
    margin: 0;
    padding: 0;
    font-size: 16px;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
