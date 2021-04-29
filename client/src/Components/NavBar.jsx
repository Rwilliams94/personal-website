import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
// import UserContext from "./Context/UserContext";
import "../Styles/Navbar.css";

const NavBar = (props) => {


  return (
    <div className="navbar-main">
      <NavLink exact to="/" className="navbar-title">
        <h2>Rowan Williams.</h2>
      </NavLink>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink exact to="/about" className="navbar-item">
            <h3>About</h3>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink exact to="/projects" className="navbar-item">
            <h3>Projects</h3>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink exact to="/contact" className="navbar-item">
            <h3>Contact</h3>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
