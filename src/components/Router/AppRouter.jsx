// src/router/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import About from '../About/About';
import Home from '../Home/Home'; 
import Skills from '../Skill/Skill'; 
import Projects from '../Projects/Project';
import Contact from '../Contact/Contact';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
