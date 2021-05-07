import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-main" id="About">
      <div className="about-pic-box" >
        <img className="about-pic" src="https://res.cloudinary.com/dahzswwzk/image/upload/v1620212898/profile_picture_rz2q1z.jpg" alt="profile"/>
      </div>
      <div className="about-body">
        <h1 className="about-title">Tech. Finance. London. Paris.</h1>
        <p>
          I am a Junior Full-Stack Web Developer with 6 years of experience in
          the finance industry.
        </p>
        <p>
          Having decided I wanted a new challenge and to redirect my career, I
          enrolled at Ironhack Paris to begin my Web Development journey. During
          this 10-week intensive boot camp I focused on MERN Full-Stack
          development, completing three projects to test and build skills. These
          included a video game using Javascript/HTML/CSS, a Full-Stack web
          application with NodeJS and MondgoDB and a single page Full-Stack
          application using ReactJS.
        </p>
        <p>
          {" "}
          I am passionate about Web Development, and eager to build effective
          and elegant products. I'm excited to join a collaborative company in
          Paris, and combine my skills and experience in forward-looking,
          amazing technology.
        </p>
        <p>
          I previously worked as both an Asset Manager Research Consultant and a
          forward facing Client Consultant for institutional investor's ranging
          from £100m to £6bn in size. I am a CFA Charterholder.
        </p>
        <p className="about-technologies">
          JavaScript | ReactJs | NodeJs | ExpressJs | MongoDB | HTML | CSS |
          Axios | Mongoose | Git |
        </p>
      </div>
    
    </div>
  );
};

export default About;
