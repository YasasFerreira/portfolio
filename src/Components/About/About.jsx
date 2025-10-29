import React from 'react'
import "./About.css"
import profile from "../../assets/profile.png"

const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src="" alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt="profile" className='about-left-img '/>
            </div>
            <div className="about-right">
                
                <div className="about-para">
                    <p>
                        I am an undergraduate computer science student with a strong interest in web development,
                        mobile app development,data science and machine learning. i enjoy solving real world problems
                        throuhg technology and continuosly learning new tolls and frameworks. My portfolio 
                        highlights acadenic projects and personal experiments that reflect my curiosity,
                        creativity and growth mindset.
                    </p>
                
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width:"35%"}}/></div>
                    <div className="about-skill"><p>React Native</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
