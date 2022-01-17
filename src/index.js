import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PantallaPrincipal from "pantallaPrincipal";
import Game from "Game";
import WaitingScreen from "WaitingScreen";
import PantallaFinal from "pantallaFinal";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="pantallaPrincipal" element={<PantallaPrincipal />} />
      <Route path="pantallaFinal" element={<PantallaFinal />} />
      <Route path="game" element={<Game />} />
      <Route path="waitingScreen" element={<WaitingScreen />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
