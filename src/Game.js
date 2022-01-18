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
import Modal from "@mui/material/Modal";
import { Backdrop, Box, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
const TitleLvl = styled.p`
  text-align: center;
  font-family: "Henny Penny", cursive;
  color: red;
  font-size: 40pt;
  margin-top: 18.2%;
  margin-left: 32.6%;
  position: absolute;
  padding: 0;
  border-radius: 25px;
  background-color: #076579;
  text-align: center;
  padding: 0.16%;
  -webkit-text-stroke: 1px black;
  -webkit-box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
    -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
    12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 5px 5px 15px 5px #ff8080, -9px 5px 15px 5px #ffe488,
    -7px -5px 15px 5px #8cff85, 12px -5px 15px 5px #80c7ff,
    12px 10px 15px 7px #e488ff, -10px 10px 15px 7px #ff616b,
    -10px -7px 27px 1px #8e5cff, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "#076579",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Button = styled.button`
  // display: inline-block;
  color: white;
  font-size: 2em;
  //margin: 1em;
  background-color: #63ccff;
  margin-top: 10%;
  margin-left: 32%;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  &:hover {
    background-color: #98ee99;
    color: white;
  }

  //display: block;
`;

const ModalTitle = styled.h1`
  text-align: center;
  color: #00c853;
  font-family: "Henny Penny", cursive;
  font-size: 2.6em;
  -webkit-text-stroke: 0.1px black;
`;

const ModalDescription = styled.p`
  text-align: center;
`;
const ModalPremioText = styled.p`
  text-align: center;
  font-weight: bold;
`;
const Game = () => {
  const [openCorrect, setOpenCorrect] = React.useState(false);
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
  const [squareBeingDragged, setSquareBeingDragged] = useState(null);
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
  const [scoreDisplay, setScoreDisplay] = useState(0);
  let navigate = useNavigate();
  const [niveles, setNiveles] = useState([1, 2, 3, 4]);
  const [selectedNivel, setSelectedNivel] = useState(0);
  const [movimientos, setMovimientos] = useState([200, 150, 100, 50]);
  const [puntos, setPuntos] = useState([10, 145, 188, 250]);
  //const [puntos, setPuntos] = useState([10, 10, 10, 10]);

  const [selectedPuntos, setSelectedPuntos] = useState(0);
  const checkForColumnOfFour = () => {
    for (let i = 0; i <= 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      const decidedColor = currentColorArrangement[i];
      const isBlank = currentColorArrangement[i] === blank;

      if (
        columnOfFour.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 4);
        columnOfFour.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  const checkForRowOfFour = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const decidedColor = currentColorArrangement[i];
      const notValid = [
        5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
        54, 55, 62, 63, 64,
      ];
      const isBlank = currentColorArrangement[i] === blank;

      if (notValid.includes(i)) continue;

      if (
        rowOfFour.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 4);
        rowOfFour.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  const checkForColumnOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedColor = currentColorArrangement[i];
      const isBlank = currentColorArrangement[i] === blank;

      if (
        columnOfThree.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 3);
        columnOfThree.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  const checkForRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const decidedColor = currentColorArrangement[i];
      const notValid = [
        6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
      ];
      const isBlank = currentColorArrangement[i] === blank;

      if (notValid.includes(i)) continue;

      if (
        rowOfThree.every(
          (square) =>
            currentColorArrangement[square] === decidedColor && !isBlank
        )
      ) {
        setScoreDisplay((score) => score + 3);
        rowOfThree.forEach(
          (square) => (currentColorArrangement[square] = blank)
        );
        return true;
      }
    }
  };

  const moveIntoSquareBelow = () => {
    for (let i = 0; i <= 55; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
      const isFirstRow = firstRow.includes(i);

      if (isFirstRow && currentColorArrangement[i] === blank) {
        let randomNumber = Math.floor(Math.random() * candyColors.length);
        currentColorArrangement[i] = candyColors[randomNumber];
      }

      if (currentColorArrangement[i + width] === blank) {
        currentColorArrangement[i + width] = currentColorArrangement[i];
        currentColorArrangement[i] = blank;
      }
    }
  };

  const dragStart = (e) => {
    setSquareBeingDragged(e.target);
  };
  const dragDrop = (e) => {
    setSquareBeingReplaced(e.target);
  };
  const dragEnd = () => {
    const squareBeingDraggedId = parseInt(
      squareBeingDragged.getAttribute("data-id")
    );
    const squareBeingReplacedId = parseInt(
      squareBeingReplaced.getAttribute("data-id")
    );

    currentColorArrangement[squareBeingReplacedId] =
      squareBeingDragged.getAttribute("src");
    currentColorArrangement[squareBeingDraggedId] =
      squareBeingReplaced.getAttribute("src");

    const validMoves = [
      squareBeingDraggedId - 1,
      squareBeingDraggedId - width,
      squareBeingDraggedId + 1,
      squareBeingDraggedId + width,
    ];

    const validMove = validMoves.includes(squareBeingReplacedId);

    const isAColumnOfFour = checkForColumnOfFour();
    const isARowOfFour = checkForRowOfFour();
    const isAColumnOfThree = checkForColumnOfThree();
    const isARowOfThree = checkForRowOfThree();

    if (
      squareBeingReplacedId &&
      validMove &&
      (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)
    ) {
      setSquareBeingDragged(null);
      setSquareBeingReplaced(null);
    } else {
      currentColorArrangement[squareBeingReplacedId] =
        squareBeingReplaced.getAttribute("src");
      currentColorArrangement[squareBeingDraggedId] =
        squareBeingDragged.getAttribute("src");
      setCurrentColorArrangement([...currentColorArrangement]);
    }
  };

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };

  useEffect(() => {
    createBoard();
  }, []);
  useEffect(() => {
    if (scoreDisplay >= puntos[selectedPuntos]) {
      setScoreDisplay(0);
      handleOpenCorrect();
    }
  }, [scoreDisplay]);
  const handleOpenCorrect = () => {
    setOpenCorrect(true);
  };

  const handleCloseCorrect = () => {
    setScoreDisplay(0);
    setSelectedNivel(selectedNivel + 1);
    setSelectedPuntos(selectedPuntos + 1);
    setOpenCorrect(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour();
      checkForRowOfFour();
      checkForColumnOfThree();
      checkForRowOfThree();
      moveIntoSquareBelow();
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);
    return () => clearInterval(timer);
  }, [
    checkForColumnOfFour,
    checkForRowOfFour,
    checkForColumnOfThree,
    checkForRowOfThree,
    moveIntoSquareBelow,
    currentColorArrangement,
  ]);

  return (
    <>
      <Title>
        Llega hasta {puntos[selectedPuntos]} Puntos para recibir una sorpresa
        misteriosa...
      </Title>
      <div className="app">
        <div className="game">
          {currentColorArrangement.map((candyColor, index) => (
            <img
              className="center"
              key={index}
              src={candyColor}
              alt={candyColor}
              data-id={index}
              draggable={true}
              onDragStart={dragStart}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDrop={dragDrop}
              onDragEnd={dragEnd}
            />
          ))}
        </div>
        <TitleLvl>NIVEL {niveles[selectedNivel]}</TitleLvl>

        <ScoreBoard score={scoreDisplay} />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        //className={classes}
        open={openCorrect}
        onClose={handleCloseCorrect}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCorrect}>
          <Box sx={style}>
            <ModalTitle id="transition-modal-title">
              ¡Enhorabuena! ¡Te has ganado un Besillo!
            </ModalTitle>
            <ModalDescription id="transition-modal-description">
              a parte de tu regalo... claro.
            </ModalDescription>
            <ModalPremioText id="transition-modal-description">
              ¡Girate para Recibir tú regalo!
            </ModalPremioText>
            {selectedNivel < 3 ? (
              <Button onClick={() => handleCloseCorrect()}>
                Siguiente nivel
              </Button>
            ) : null}
            {selectedNivel >= 3 ? (
              <Button
                style={{ marginLeft: "17.6vw" }}
                onClick={() => navigate("/pantallaFinal")}
              >
                Fin
              </Button>
            ) : null}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Game;
