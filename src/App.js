import React from "react";
//import logo from "./logo.svg";
//import "./App.css";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";

import PantallaPrincipal from "pantallaPrincipal";
import Game from "Game";
/* import Inicio from "components/inicio"; */
const Button = styled.button`
  // display: inline-block;
  color: palevioletred;
  font-size: 2em;
  //margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    background-color: palevioletred;
    color: white;
  }

  //display: block;
`;
const H1 = styled.h1`
  margin-top: 20%;
  font-size: 6em;
  font-family: "Caveat", cursive;
`;
function App() {
  //const history = useHistory();
  // Some random colors

  return <div className="App"></div>;
}

export default App;
