import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import Header from "./components/Header";
import RoomDetail from "./pages/RoomDetail";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Header />
    <RoomDetail />
  </React.StrictMode>,
  document.getElementById("root")
);
