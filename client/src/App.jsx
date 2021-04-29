import React, { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Lost from './Pages/Lost';
// import UserContext from "./Components/Context/UserContext"
// import api from './API/apiHandler'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
        <Route path="*" component={Lost}/>
      </Switch>
    </div>
  );
}

export default App;
