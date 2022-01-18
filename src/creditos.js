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
import { useNavigate } from "react-router-dom";
import collage from "assets/images/collage.png";

const width = 8;
const candyColors = [
  blueCandy,
  orangeCandy,
  purpleCandy,
  redCandy,
  yellowCandy,
  greenCandy,
];
const Title = styled.p`
  text-align: center;
  font-family: "Henny Penny", cursive;
  color: red;
  font-size: 40pt;
  margin: 0;
  padding: 0;
  -webkit-text-stroke: 1px black;
`;
const P = styled.p`
  text-align: center;
  font-family: "Henny Penny", cursive;
  color: red;
  font-size: 30pt;
  margin: 0;
  padding: 0;
  -webkit-text-stroke: 1px black;
`;
const P1 = styled.p`
  text-align: center;
  // font-family: "Henny Penny", cursive;
  color: white;
  font-size: 20pt;
  margin: 0;
  padding: 0;
  // -webkit-text-stroke: 1px black;
`;
const Contenedor = styled.div`
  background-color: rgba(7, 101, 121, 0.6);
  text-align: center;
  max-height: 60vh;
  height: 60vh;
  width: 50vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2%;
  // font-family: "Henny Penny", cursive;
  border-radius: 25px;
  border: 2px solid #73ad21;
  -webkit-box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
    -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
    12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
    -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
    12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;
const Button = styled.button`
  // display: inline-block;
  color: white;
  font-size: 2em;
  //margin: 1em;
  background-color: #63ccff;
  margin-top: 2%;
  // margin-left: 32%;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  &:hover {
    background-color: #98ee99;
    color: white;
  }

  //display: block;d
`;
const ImageFinal = styled.img`
  /*   position: fixed;
  bottom: 0;
  right: 0; */
  height: 90%;
`;

const Creditos = () => {
  const [scoreDisplay, setScoreDisplay] = useState(0);
  let navigate = useNavigate();
  return (
    <>
      <Title>¡FELIZ CUMPLEAÑOS!</Title>

      <Contenedor>
        <ImageFinal src={collage} />
        <Title>¡TE AMO!</Title>
      </Contenedor>
    </>
  );
};

export default Creditos;
