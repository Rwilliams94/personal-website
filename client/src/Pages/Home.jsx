import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import '../Styles/Home.css'

const Home = () => {
    return (
        <div className="home-main">
            <div className='home-title-main'>
                <h1 className='home-title'>Hello, I'm <span className='name'>Rowan Williams.</span></h1>
                <h1 className='home-title'>I'm a full-stack web developer</h1>
                <div className='home-projectlink'>
                    <NavLink exact to="/projects" className="navbar-item">
                        <h3>See My Projects</h3>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home
