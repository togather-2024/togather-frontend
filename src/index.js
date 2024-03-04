import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";
import GlobalStyles from "./styles/GlobalStyles.styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles></GlobalStyles>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
