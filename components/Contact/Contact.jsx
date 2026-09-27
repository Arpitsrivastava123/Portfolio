import React from 'react'
import './Contact.css'
import c from "../../assets/c.png"
function Contact() {
  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={c} alt="" />
      </div>
      <div className="rightcontact">
         
         <from action="https://formspree.io/f/xgavlnge" method="POST">
           <input name="Username" type="text" placeholder="Your Name"/>
        <input name="Email" type="email" placeholder='Email'/>
        <textarea name=" Message" id="textarea" placeholder='message me'></textarea>
          <input type="submit" id="btn" value='Submit'/>
         </from>
      
      </div>
    </div>
  )
}

export default Contact
