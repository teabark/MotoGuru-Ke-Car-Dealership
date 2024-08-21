import React from 'react'
import { BriefcaseBusiness } from 'lucide-react';

function AboutCard(props) {
  return (
    <div className='about-card'>
        <img className="about-card-img" src={props.img} alt="Motoguru team member avatar" height={200} width={"100%"}/>
        <div className='about-card-details'>
        <h4 style={{fontWeight: "600"}}>{props.name}</h4>
        <p style={{height: "280px", "text-align": "justify"}}>{props.description}</p>
        <hr/>
        <p style={{fontWeight: "600", display: "flex", gap: "10px"}}><BriefcaseBusiness/>{props.role}</p>
        </div>
    </div>
  )
}

export default AboutCard