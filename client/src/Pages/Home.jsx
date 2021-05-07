import React from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll'
import '../Styles/Home.css'

const Home = (props) => {
    return (
      <div className="home-main" id="Home">
        <div className="home-title-main">
          <h1 className="home-title thin">
            Hello, I'm <span className="color-pop">Rowan Williams.</span>
          </h1>
          <h1 className="home-title thin">I'm a full-stack web developer.</h1>
          <div className="home-projectlink">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-30}
              duration={1000}
              className="navbar-item"
            >
              <h2 className="thin navbar-scroll" onClick={props.funcShow}>
                Find Out More
              </h2>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Home
