import React from 'react'
import './Education.css'
import  experience  from '../../assets/experience'

const Education = () => {
  return (
    <div className='education'>
        <div className="education-title">
            <h1>Education/Experience</h1>
        </div>
        <div className="education-container">
            {
                experience.map((experience,index)=>{
                    return(
                        <div className="education-format">
                            <h3>{experience.year}</h3>
                            <h2>{experience.title}</h2>
                            <h2>{experience.institute}</h2>
                            <p>{experience.description}</p>
                        </div>
                    )
                })
            }

        </div>
      
    </div>
  )
}

export default Education
