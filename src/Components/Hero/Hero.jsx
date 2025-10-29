import React from 'react'
import "./Hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile from "../../assets/profile.png"

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="" />
        <h1><span>I am Yasas Ferreira</span></h1>
        <p>I am an undergraduate computer science student with a strong interest in web development,
            mobile app development,data science and machine learning. i enjoy solving real world problems
            throuhg technology and continuosly learning new tolls and frameworks. 
        </p>
        <div className="hero-action">
            <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                Connect with me
                </AnchorLink>
            </div>
             <a href="/resume.pdf" download>
                <div className="hero-resume">
                    My resume
                </div>
            </a>
        </div>
    </div>
  )
}

export default Hero
