import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="about-main">
      <div className="about-body">
        <h1 className="about-title">London. Paris. Finance. Tech. </h1>
        <p>
          I am a Junior Full-Stack Web Developer with 6 years of experience in
          the finance industry. 
          </p>
          <p>After deciding I wanted a new challenge and to
          redirect my career, I started my Web Development journey at Ironhack
          Paris; completing a 9-week intensive boot camp with a focus on
          Full-Stack development. Completing three projects to test and build
          skills including a video game using Javascript/HTML/CSS, a Full-Stack
          web application with NodeJS and MondgoDB and a single page application
          using ReactJS. 
          </p>
          <p> I am passionate about Web Development, and eager to
          build effective and elegant products. I'm excited to join a
          collaborative company in Paris, and combine my skills and experience
          in forward-looking, amazing technology. I have six years of experience
          in the finance industry, working as both a Asset Manager Research
          Consultant and a forward facing Client Consultant for institutional
          investor's ranging from £100m to £6bn in size. I am a CFA
          Charterholder.
        </p>
        <p className="about-technologies">JavaScript | ReactJs | NodeJs | HTML | CSS | Axios | ExpressJs | MongoDB | Mongoose | Git |  </p>
      </div>
    </div>
  );
};

export default About;
