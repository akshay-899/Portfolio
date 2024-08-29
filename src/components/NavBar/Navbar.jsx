import React from 'react';
import './navbar.css';
import logo from '/assets/logo.gif';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="navcontent">
          <a href="/" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
