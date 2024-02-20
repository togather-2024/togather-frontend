import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import RoomDetail from "./pages/RoomDetail";
import Header from "./components/Header";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <RoomDetail />
    <Header />
  </React.StrictMode>,
  document.getElementById("root")
);
