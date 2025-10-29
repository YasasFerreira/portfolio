import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1> 
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <div className="contact-detail">
                    <div className="contact-details">
                    <img src=''/>
                    <p>yasasferreira05@gmail.com</p>
                    </div>
                    <div className="contact-details">
                    <img src=''/>
                    <p>+94 76 275 1352</p>
                    </div>
                    <div className="contact-details">
                    <img src=''/>
                    <p>Gampaha,Sri Lanka.</p>
                        
                    </div>
                </div>
            </div>
            <form action="" className="contact-right">
                <label htmlFor=''>Your Name</label>
                <input type="text" name="name" placeholder='Enter Your Name  ' />
                <label htmlFor=''>Your Email</label>
                <input type = 'email' name='email' placeholder='Enter Your Email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message"placeholder='Enter your message' rows="10"></textarea>
                <button className='contact-submit' type='submit'>Submit now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
