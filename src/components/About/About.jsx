import React from "react";
import "./about.css";
import pic from "/assets/akshay.jpeg";

function About() {
  return (
    <div className="about">
      <span id="aboutme">About Me</span>
      <div className="content-wrapper">
      <div className="box">
          <img src={pic} alt="Akshay Prabhu" className="myphoto" />
        </div>
        <div className="aboutcontent">
          <span className="content">I'm M Akshay Prabhu, an undergraduate student in <span id='highlight'>Computer Science and
          Engineering</span> with a passion for <span id="highlight">Coding</span> and <span id="highlight">Problem-solving</span>.
          <br />
          I enjoy building projects that are helpful to society. I'm a team
          player and natural leader, always eager to learn and take on new
          challenges in the tech world.
          <br />
          In my free time, I love playing <span id="highlight"> Badminton</span> and <span id="highlight">Table Tennis</span>, and I
          also enjoy solving <span id="highlight">Sudoku</span> puzzles (☉_☉).
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
