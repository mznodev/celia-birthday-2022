import { useEffect, useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import blueCandy from "./images/blue-candy.png";
import greenCandy from "./images/green-candy.png";
import orangeCandy from "./images/orange-candy.png";
import purpleCandy from "./images/purple-candy.png";
import redCandy from "./images/red-candy.png";
import yellowCandy from "./images/yellow-candy.png";
import blank from "./images/blank.png";
import styled from "styled-components";
import React from "react";

const width = 8;
const candyColors = [
  blueCandy,
  orangeCandy,
  purpleCandy,
  redCandy,
  yellowCandy,
  greenCandy,
];

const PantallaPrincipal = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
  const [squareBeingDragged, setSquareBeingDragged] = useState(null);
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
  const [scoreDisplay, setScoreDisplay] = useState(0);
  const Title = styled.p`
    text-align: center;
    font-family: "Henny Penny", cursive;
    color: red;
    font-size: 40pt;
    margin: 0;
    padding: 0;
    -webkit-text-stroke: 1px black;
  `;
  return (
    <>
      <Title>¡Bienvenida a tú 26 cumpleaños!</Title>
      <div className="app">
        <div className="game"></div>
      </div>
    </>
  );
};

export default PantallaPrincipal;
