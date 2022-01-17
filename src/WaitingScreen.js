//import logo from "./logo.svg";
//import "./App.css";
import React from "react";
import Countdown from "react-countdown";
import styled, { keyframes } from "styled-components";
import waitingScreen from "assets/images/noche.gif";
import osoCoffee from "assets/images/osoGifLoop.gif";

function WaitingScreen() {
  //Styles
  const Title = styled.p`
    font-size: 3em;
    text-align: center;
    color: #18ffff;
    font-family: "Gemunu Libre", sans-serif;
    margin: 0;
    color: rgba(255, 255, 255, 0.66);
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
      0 0 10px rgba(255, 255, 255, 0.5);
    z-index: 10;
  `;
  const Subtitle = styled.h2`
    font-size: 2em;
    text-align: center;
    color: #18ffff;
    font-family: "Gemunu Libre", sans-serif;
    color: rgba(255, 255, 255, 0.3);
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
      0 0 10px rgba(255, 255, 255, 0.5);
    z-index: 2;
  `;
  const Wrapper = styled.div`
    padding-top: 20%;

    z-index: 2;
  `;

  const OsoCoffeeImage = styled.img`
    position: fixed;
    bottom: 0;
    right: 0;
    height: 16%;
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
              Durmiendo hasta tu próximo cumpleaños.
              <br /> Quedan {days} Dias {hours} Horas {minutes} Minutos y{" "}
              {seconds} Segundos para poder empezar
              <br />
            </Title>
          </Wrapper>
        </>
      );
    }
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <OsoCoffeeImage src={osoCoffee} />
      <Countdown date={dateBirthay} renderer={renderer}>
        <Completionist />
      </Countdown>
    </div>
  );
}

export default WaitingScreen;
