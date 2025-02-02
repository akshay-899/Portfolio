import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../src/components/NavBar/Navbar";
import Home from "../src/components/Home/Home";
import About from "../src/components/About/About";
import Skills from "../src/components/Skill/Skill";
import Projects from "../src/components/Projects/Project";
import Contact from "../src/components/Contact/Contact";
import "./App.css"; 

function App() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); 
          }
        });
      },
      {
        threshold: 0.2, 
      }
    );
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((element) => observer.observe(element));
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <Navbar />
      <App />
    </Router>
  );
}