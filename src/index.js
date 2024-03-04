import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import RoomDetail from "./pages/RoomDetail";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <RoomDetail />
  </React.StrictMode>,
  document.getElementById("root")
);
