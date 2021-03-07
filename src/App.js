import React from "react";
import "./App.css";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Particles from "react-particles-js";
import First from "./components/First";
import Second from "./components/Second";
import NightSky from "./components/NightSky";
import Snow from "./components/Snow";
import Polygon from "./components/Polygon";
function App() {
  return (
    <Router>
      <NavLink exact to="/snow">
        Snow
      </NavLink>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/second">
        Second
      </NavLink>
      <NavLink exact to="/night">
        NightSky
      </NavLink>
      <NavLink exact to="/polygon">
        Polygon
      </NavLink>
      <Route path="/snow">
        <Snow />
      </Route>
      <Route path="/">
        <First />
      </Route>
      <Route path="/second">
        <Second />
      </Route>
      <Route path="/night">
        <NightSky />
      </Route>
      <Route path="/polygon">
        <Polygon />
      </Route>
    </Router>
  );
}

export default App;
