import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
// import MainPage from "./pages/MainPage";
import SignIn from "./components/SignIn/SignIn";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <SignIn></SignIn>
    </React.StrictMode>,
    document.getElementById("root")
);
