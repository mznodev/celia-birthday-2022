import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import Countdown from "react-countdown";
import styled, { keyframes } from "styled-components";
import bgCountDown from "assets/video/backgroundCountdown.mp4";
import osoCoffee from "assets/images/osoGifLoop.gif";

function App() {
  //Styles

  const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: #18ffff;
    font-family: "Press Start 2P", cursive;
    -webkit-text-stroke: 1px black;
  `;
  const Subtitle = styled.h2`
    font-size: 2em;
    text-align: center;
    color: #18ffff;
    font-family: "Press Start 2P", cursive;
    text-shadow: 4px 4px gray;
  `;
  const Wrapper = styled.section`
    height: 100vh;
    /*This part is important for centering*/
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const BackgroundVideo = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
  `;
  // Create the keyframes
  const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
  const typing = keyframes`
from {
    width: 0
  }
  50% {
    border-color: transparent
  }
`;
  const Typing = styled.div`
    width: 22ch;
    animation: ${typing} 2s steps(22), blink 0.5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 6em;
  `;
  // Here we create a component that will rotate everything we pass in over two seconds
  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
  `;
  const OsoCoffeeImage = styled.img`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: -1;
    /*  width: 100%; */
  `;
  // Random component

  const Completionist = () => <span>You are good to go!</span>;
  const dateBirthay = new Date("January 18, 2022 00:00:00");
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <>
          <Wrapper>
            <Title>
              Bienvenida a tu proximo cumple Gordi <br />
              <br /> Quedan {days} Dias {hours} Horas {minutes} Minutos y{" "}
              {seconds} Segundos para poder empezar
              <br />
              <Subtitle>Trabajando...</Subtitle>
            </Title>
          </Wrapper>
        </>
      );
    }
  };

  return (
    <div className="App">
      <BackgroundVideo className="videoTag" autoPlay loop muted>
        <source src={bgCountDown} type="video/mp4" />
      </BackgroundVideo>

      <OsoCoffeeImage src={osoCoffee} />
      <Countdown date={dateBirthay} renderer={renderer}>
        <Completionist />
      </Countdown>
    </div>
  );
}

export default App;
