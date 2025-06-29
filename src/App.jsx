import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Contact from "./Components/Contact/Contact";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const App = () => {
useEffect(()=>{
  AOS.init({
    offset:100,
    duration:800,
    easing:"ease-in-sine",
    delay:100,
    // once:true,
  });
  AOS.refresh();
},[]);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
