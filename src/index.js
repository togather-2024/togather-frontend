import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Header />
  </React.StrictMode>,
  document.getElementById("root")
);
