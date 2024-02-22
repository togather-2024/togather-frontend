import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import MainPage from "./pages/MainPage";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <MainPage></MainPage>
    </React.StrictMode>,
    document.getElementById("root")
);
