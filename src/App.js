import logo from "./logo.svg";
import React from "react";
import styled, { keyframes } from "styled-components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Inicio from "WaitingScreen";
import WaitingScreen from "WaitingScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/*   <Route path="/introduccion">{<Introduccion />}</Route>
          <Route path="/pregunta1">{<Pregunta1 />}</Route>
          <Route path="/pregunta2">{<Pregunta2 />}</Route>
          <Route path="/pregunta3">{<Pregunta3 />}</Route>
          <Route path="/pregunta4">{<Pregunta4 />}</Route>
          <Route path="/fin">{<Fin />}</Route> */}
          <Route path="/">
            <WaitingScreen />
          </Route>
          <Route path="/inicio">{<Inicio />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
