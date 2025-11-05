import React from 'react'
import achievements from '../../assets/achievements'
import './Achivements.css'
import line from "../../assets/theme_pattern.svg"

const Achivements = () => {
  return (
    <div id="achivements" className='achivements' >
        <div className="achivements-title">
            <h1>Achivements</h1>
            <img src={line} alt="" />
        </div>
        <div className="achivements-container">
            {
                achievements.map((achievements,index)=>{
                    return(
                        <div className="achivements-format">
                            <h3>{achievements.no}</h3>
                            <h2>{achievements.course}</h2>
                            <h3>{achievements.platform}</h3>
                            <p>{achievements.year}</p>
                            <div className="view-certificate">
                                <p>View Certificate</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
      
    </div>
  )
}

export default Achivements
