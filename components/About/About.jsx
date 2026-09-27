import React from 'react'
import './About.css'
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import py from "../../assets/py.png"
import dsa from "../../assets/dsa.png"
function About() {
  return (
   <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
      
   <div className="aboutdetails">
       <div className="personalinfo">
            <h1>Personal Info</h1>
           <ul>
                  <li>
                       <span>Name</span>:ARPIT SRIVASTAVA
                 </li>
              <li>
                   <span>AGE</span>:20
             </li>
             <li>
                 <span>GENDER</span>:MALE
             </li>
              <li>
                  <span>LANGUAGE KNOWN</span>:ENGLISH, HINDI
              </li>
          </ul>
       </div>
       < div className="eduacation">
          <h1>Educational Background</h1>
          <ul>
            <li>
              <span>DEGREE</span>:BACHELOR OF APPLICATION (BCA)
            </li>
            <li>
              <span>BRANCH</span>:COMPUTER SCIENCE
            </li>
            <li>
              <span>CGPA</span>:7.5
            </li>
            <li>
              <span>LANGUAGE KNOWN</span>:ENGLISH, HINDI
            </li>
          </ul>
        </div>
       < div className="skills">
          <h1>Skills</h1>
          <ul>
            <li>
              MERN STACK WEB DEVELOPMENT
            </li>
            <li>
             DSA
            </li>
            <li>
             C++
            </li>
            <li>
             PYTHON
            </li>
          </ul>
          </div>
       </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
         <Card title="PYTHON" image={py}/>
          <Card title="DSA" image={dsa}/>
      </div>
    </div>
  )
}

export default About
