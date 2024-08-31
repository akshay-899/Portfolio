import React from 'react'
import './home.css'
import programmer from '/assets/pro.png'
import About from '../About/About'
import Skill from '../Skill/Skill'
import Project from '../Projects/Project'
import Contact from '../Contact/Contact'

function Home() {
  return (
    <>
    <div className='home'>
      <div className="homecontent">
        <span id='hi'>Hi there,</span> I'm <span className="myname">Akshay Prabhu</span>
        <p id='homepara'>I am a <span id='job'>Software Developer</span></p>
        <button className="btns">Resume</button>
        <button className="btns">Contact Me</button>
      </div>
      <img src={programmer} alt="image" className="homeimage" />
    </div>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    </>
  )
}

export default Home
