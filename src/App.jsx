import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../src/components/About/About';
import Home from '../src/components/Home/Home';
import Navbar from '../src/components/NavBar/Navbar'; 
import Skills from '../src/components/Skill/Skill'; 
import Projects from '../src/components/Projects/Project'; 
import Contact from '../src/components/Contact/Contact';

function App() {
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
}

export default App;