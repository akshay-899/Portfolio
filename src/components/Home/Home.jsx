import React from 'react'
import './home.css'
import programmer from '/assets/pro.png'
import About from '../About/About'
import Skill from '../Skill/Skill'
import Project from '../Projects/Project'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
const link="https://drive.google.com/file/d/14rVWyJyfKvxTdFyuy5v15tgOwsrsZzvI/view?usp=sharing"

function Home() {
  return (
    <>
    <div className='home'>
      <div className="homecontent">
        <span id='hi'>Hi there,</span> I'm <span className="myname">Akshay Prabhu</span>
        <p id='homepara'>I am a <span id='job'>Software Developer</span></p>
        <a href={link} className="btns">Resume</a>
        <Link to="/contact" className="btns">Contact Me</Link>
      </div>
      <img src={programmer} alt="image" className="homeimage" />
    </div>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home
