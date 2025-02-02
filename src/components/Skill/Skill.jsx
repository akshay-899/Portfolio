import React from "react";
import "../Skill/skill.css";
import reactlogo from '/assets/react.svg'
// import django from "/assets/django.svg";
import express from "/assets/express.svg";
import mysql from "/assets/mysql.png";
import mongodb from "/assets/mongo.svg";
import cpp from "/assets/cpp.svg";
import c from "/assets/c.svg";
import java from "/assets/java.svg";
import python from "/assets/python.svg";
import git from "/assets/git.svg";
import github from "/assets/github.svg";
import vscode from "/assets/vs-code.svg";
import canva from "/assets/canva.svg";

function Skill() {
  return (
    <>
    <div className="skill fade-in">
      <div className="skillmain">
        <div className="skill">Skills</div>
        <div className="skillbox">
          <div className="skill-item">
            <div className="frameworks-and-library">Web Development</div>
              <img
                src={reactlogo}
                className="skill-item-icon"
                title="React"
              ></img>
              <img
                src={express}
                className="skill-item-icon"
                title="Express Js"
              ></img>
              {/* <img src={reactlogo} className="skill-item-icon"></img> */}
              <img src={mysql} className="skill-item-icon" title="Mysql"></img>
              <img
                src={mongodb}
                className="skill-item-icon"
                title="MongoDB"
              ></img>
          </div>
          <div className="skill-item">
            <div className="programming-languages">Programming Languages</div>
            <img src={cpp} alt="C++" className="skill-item-icon" title="C++" />
            <img src={c} alt="C" className="skill-item-icon" title="C" />
            <img
              src={java}
              alt="Java"
              className="skill-item-icon"
              title="Java"
            />
            <img
              src={python}
              alt="Python"
              className="skill-item-icon"
              title="Python"
            />
          </div>
          <div className="skill-item">
            <div className="tools">Tools</div>
            <img src={git} alt="Git" className="skill-item-icon" title="Git" />
            <img
              src={github}
              alt="GitHub"
              className="skill-item-icon"
              title="GitHub"
            />
            <img
              src={vscode}
              alt="VS Code"
              className="skill-item-icon"
              title="Visual Studio Code"
            />
            <img
              src={canva}
              alt="Canva"
              className="skill-item-icon"
              title="Canva"
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Skill;