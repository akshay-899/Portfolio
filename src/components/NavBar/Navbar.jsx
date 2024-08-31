// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '/assets/logo.gif';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="navcontent">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/skills" className="nav-link">Skills</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
