import React from 'react'
import { Container } from "@mui/material";
import { Grid } from "@nextui-org/react";
const Event = () => {
  return (
    <div className="about" id="about">
      <h1 className="about-header">
        Events
      </h1>
      <br/>

      <Container className='abt-cont'>
      <Grid.Container gap={2} justify="center" >
        <Grid>
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
          
        </ul>
        </Grid>

        <Grid>
          <ul className="about-main-text">
            <li>Cosmos Game</li>
            <li>Android Artists</li>
            <li>Circuit-O-Mania</li>
            <li>DS Visualisation</li>
            <li>Lathe Wars</li>
            <li>Car Parts Assembly</li>
            <li>Model Testing</li>
            <li>Cosmos Hunting</li>
            <li>Finish & level up</li>
            <li>FLOATArig</li>
            <li>Project making</li>
          </ul>
        </Grid>
      </Grid.Container>
        
      </Container>
    </div>
  )
}

export default Event