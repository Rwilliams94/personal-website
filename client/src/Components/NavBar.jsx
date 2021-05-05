import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-scroll';
// import UserContext from "./Context/UserContext";
import "../Styles/Navbar.css";

const NavBar = (props) => {

  const [show, setShow] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    setShow(props.show)
  }, [props.show])

  function handleMenu() {
    setMenu(!menu)
  }

  function handleHideMenu() {
    setMenu(false)
  }

  function handleHideAndTitle() {
    handleHideMenu()
    props.funcShow()
  }


  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= 570 ) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  


  return (
    <div className={`navbar-main ${show ? "" : "hide-title"}`}>
      {/* <NavLink className={`navbar-title ${show ? "" : "hide-title"}`} exact to="/">
        <h2 className="thin" onClick={props.funcHide}>Rowan Williams.</h2>
      </NavLink> */}

      {/* <div className="navbar-lines">
          <MenuIcon onClick={handleMenu} style={{fontSize: 45}}/>
      </div>
      <div className={`navbar-menu ${menu ? "" : "hide-menu"}`}>
      <ul className="navbar-menu-list">
        <li className="navbar-menu-item">
          <NavLink exact to="/about" className="navbar-menu-item">
            <h2 className="thin" onClick={handleHideAndTitle} >About</h2>
          </NavLink>
        </li>
        <li className="navbar-menu-item">
          <NavLink exact to="/projects" className="navbar-menu-item">
            <h2 className="thin" onClick={handleHideAndTitle} >Projects</h2>
          </NavLink>
        </li>
        <li className="navbar-menu-item">
          <NavLink exact to="/contact" className="navbar-menu-item">
            <h2 className="thin" onClick={handleHideAndTitle} >Contact</h2>
          </NavLink>
        </li>
      </ul>
      </div> */}
      

      <Link 
        activeClass="active"
        to="Home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        className="navbar-item"
         >
          <h2 className={`navbar-title ${show ? "" : "hide-title"}`} >Rowan Williams.</h2>
      </Link>

      <div className={`navbar-list ${show ? "" : "hide-title"}`}>
      <Link 
        activeClass="active"
        to="About"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        className="navbar-item" >
          <h2 className={`thin navbar-scroll ${show ? "" : "hide-title"}`} >About</h2>
      </Link>
      <Link 
        activeClass="active"
        to="Projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000}
        className="navbar-item" >
          <h2 className={`thin navbar-scroll ${show ? "" : "hide-title"}`}>Projects</h2>
      </Link>
      <Link 
        activeClass="active"
        to="Contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={1000} 
        className="navbar-item"
        >
          <h2 className={`thin navbar-scroll ${show ? "" : "hide-title"}`}>Contact</h2>
      </Link>
      </div>


      {/* <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink exact to="/about" className="navbar-item">
            <h2 className="thin" onClick={props.funcShow} >About</h2>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink exact to="/projects" className="navbar-item">
            <h2 className="thin" onClick={props.funcShow} >Projects</h2>
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink exact to="/contact" className="navbar-item">
            <h2 className="thin" onClick={props.funcShow} >Contact</h2>
          </NavLink>
        </li>
      </ul> */}
    </div>
  );
};

export default NavBar;
