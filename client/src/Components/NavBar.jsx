import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
// import UserContext from "./Context/UserContext";
import "../Styles/Navbar.css";

const NavBar = (props) => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(props.show)
  }, [props.show])



  return (
    <div className="navbar-main">
      <NavLink className={`navbar-title ${show ? "" : "hide-title"}`} exact to="/">
        <h2 className="thin" onClick={props.funcHide}>Rowan Williams.</h2>
      </NavLink>
     
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink exact to="/about" className="navbar-item">
            <h3 className="thin" onClick={props.funcShow} >About</h3>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink exact to="/projects" className="navbar-item">
            <h3 className="thin" onClick={props.funcShow} >Projects</h3>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink exact to="/contact" className="navbar-item">
            <h3 className="thin" onClick={props.funcShow} >Contact</h3>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
