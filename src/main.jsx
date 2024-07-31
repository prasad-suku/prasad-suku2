import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TicTakToe from "./components/Tic tack toe/Assets/TicTakToe.jsx";
// import Qrcodegenerator from "./Qrcodegenerator.jsx";
// import SigninLogin from "./components/SigninLogin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TicTakToe />
  </React.StrictMode>
);
