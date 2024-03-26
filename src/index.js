import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/Routing";
import GlobalStyles from "./styles/GlobalStyles.styles";
import { RecoilRoot } from "recoil";

ReactDOM.render(
    <RecoilRoot>
        <React.StrictMode>
            <GlobalStyles></GlobalStyles>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </React.StrictMode>
    </RecoilRoot>,
    document.getElementById("root")
);
