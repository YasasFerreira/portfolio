import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // read saved theme from localStorage if available; default to 'dark'
  const [dark, setDark] = useState(() => {
    try {
      return (localStorage.getItem("theme") || "dark") === "dark";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    // apply theme class to <html> (better than document.body)
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      <div className="right-controls">
        <button
          className="theme-toggle"
          aria-label="Toggle theme"
          onClick={() => setDark(prev => !prev)}
        >
          {dark ? "☀️" : "🌙"}
        </button>

        <div
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
