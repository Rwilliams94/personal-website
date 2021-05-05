import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from 'react-scroll'
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
   
  const [show, setShow] = useState(false)

  function handleShowFalse() {
    setShow(false)
  }

  function handleShowTrue() {
    setShow(true)
  }

  return (
    <div className="App">
      <NavBar show={show} funcShow={handleShowTrue} funcHide={handleShowFalse}/>
      <Home  funcShow={handleShowTrue}/>
      <About />
      <Projects />
      <Contact />

      {/* <Switch>
        <Route
          exact
          path="/"
          render={(historyProps) => {
            return (
              <Home
                {...historyProps}
                funcShow={handleShowTrue}
              />
            );
          }}
        />
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/contact" component={Contact}/>
        <Route path="*" component={Lost}/>
      </Switch> */}
    </div>
  );
}

export default App;
