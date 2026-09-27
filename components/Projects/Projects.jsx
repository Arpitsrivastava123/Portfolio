import React from 'react'
import './Project.css'
import Card from "../Card/Card"
import hg from "../../assets/hg.jpg"
import hm from "../../assets/hm.png"
import P from "../../assets/P.jpg"
function Project() {
  return (
   <div id="projects">
    <h1 id="para">2+ YEARS EXPERIENCED IN PROJECTS</h1>
    <div className="slider">
      <Card title="HAND GUESTURE" image={hg}/>
       <Card title="HOSPITAL MANAGEMENT" image={hm}/>
        <Card title="PORTFOLIO" image={P}/>
         <Card/>
          <Card/>
    </div>
   </div>
  )
}

export default Project
