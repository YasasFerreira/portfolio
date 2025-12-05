import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../../assets/profile.png";
import resume from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Hello, I am <span>Yasas Ferreira</span></h1>
        <h2>CS Undergraduate | Frontend & Mobile Developer | Tech Enthusiast</h2>
        <p>
          I am an undergraduate computer science student with a strong interest in web development,
          mobile app development, data science, and machine learning. I enjoy solving real-world
          problems through technology and continuously learning new tools and frameworks.
        </p>
        <div className="hero-buttons">
          <AnchorLink href="#contact" className="btn-connect">Connect with me</AnchorLink>
          <a href={resume} download className="btn-resume">Download Resume</a>
        </div>
      </div>
      <div className="hero-right">
        <img src={profile} alt="profile" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
