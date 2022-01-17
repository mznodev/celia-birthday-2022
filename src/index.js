import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PantallaPrincipal from "pantallaPrincipal";
import Game from "Game";
import WaitingScreen from "WaitingScreen";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PantallaPrincipal />} />
      <Route path="PantallaPrincipal" element={<PantallaPrincipal />} />
      <Route path="Game" element={<Game />} />
      <Route path="WaitingScreen" element={<WaitingScreen />} />
      WaitingScreen
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
