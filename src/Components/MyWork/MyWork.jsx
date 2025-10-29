import React from 'react'
import "./MyWork.css"
import mywork_data from '../../assets/mywork_data'
//import arrow_icon from "../../assets/"

const MyWork = () => {
  return (
    <div className='mywork' id='work'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src="" alt="" />
        </div>
        <div className="mywork-container">
          {
            mywork_data.map((work,index)=>
            {
              return (
             
                <div key={index} className="mywork-item"> 
                  <a href="https://github.com/YasasFerreira" target="_blank" rel="noopener noreferrer">
                    <img src={work.image}  />  
                  </a>  
                </div>
              )
            })
          }

        </div>
        <a href="https:github.com/YasasFerreira" target="_blank" rel="noreferrer">
          <div className="mywork-showmore">
              <p>Show More</p>
          </div>
        </a>
      
    </div>
  )
}

export default MyWork
