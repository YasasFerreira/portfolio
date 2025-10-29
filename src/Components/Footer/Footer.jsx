import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        {/* <div className="footer-top">
            <div className="footer-top-left">
                <p>I am a frontend developer.</p>

            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    {/* <img src={user} alt="" /> */}
                    {/* <input type="email" placeholder='enter your email'/>
                </div>
            </div>
        </div> */} 
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">@2025 All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
