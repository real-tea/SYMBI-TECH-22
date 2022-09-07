import React from 'react'
import { Container } from "@mui/material";

const Event = () => {
  return (
    <div className="about" id="about">
      <h1 className="about-header">
        Events
      </h1>

      <Container className='abt-cont'>
        <ul className="about-main-text">
          {/* <li>Cosmos Game</li> */}
          <li>Best Out of Good</li>
          <li>Car Parts Assembly</li>
          <li>Laser Tag</li>
          <li>Paint Your galaxy</li>
          <li>Laser Cutting</li>
          <li>AI model</li>
          <li>3D model design</li>
          <li>Finish and level up</li>
          <li>TECH MUN</li>
          <li>Drive the bot</li>
          <li>Weaving the web</li>
          <li></li>
          <li></li>
        </ul>
      </Container>
    </div>
  )
}

export default Event