import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { RecoilRoot } from "recoil";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <RecoilRoot>
    <React.StrictMode>
      <GlobalStyles></GlobalStyles>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </React.StrictMode>
  </RecoilRoot>
);
