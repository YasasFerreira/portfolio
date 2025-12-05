import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
<nav className="navbar">
  <div className="logo">MyPortfolio</div>

  <div className={`nav-links ${menuOpen ? "active" : ""}`}>
    <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </div>

  <div
    className="hamburger"
    onClick={() => setMenuOpen(prev => !prev)}
  >
    ☰
  </div>
</nav>

  );
};

export default Navbar;
