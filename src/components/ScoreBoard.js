import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
const ScoreTitle = styled.h1`
  text-align: center;
  font-family: "Henny Penny", cursive;
  color: black;
  margin: 0;
  padding: 0;
`;
const ScorePoints = styled.p`
  text-align: center;
  font-family: "Henny Penny", cursive;
  color: red;
  font-size: 60pt;
  margin: 0;
  padding: 0;
  -webkit-text-stroke: 1.6px black;
`;
const ScoreBoard = ({ score }) => {
  const [openCorrect, setOpenCorrect] = React.useState(false);

  // Modal.setAppElement("#root");

  // Some random colors

  return (
    <>
      <div className="score-board">
        <ScoreTitle>PUNTUACIÓN</ScoreTitle>
        <ScorePoints>{score}</ScorePoints>
      </div>
    </>
  );
};

export default ScoreBoard;
