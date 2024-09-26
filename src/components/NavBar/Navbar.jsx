import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '/assets/logo.gif';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); 
  };

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`navcontent ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          <Link to="/skills" className="nav-link" onClick={closeMenu}>Skills</Link>
          <Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
