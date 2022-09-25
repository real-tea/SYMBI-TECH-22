import React from 'react'
import { Container } from "@mui/material";
import { Grid , Button , Link } from "@nextui-org/react";

import Navbar from "../Navbar/Navbar";

const Event = () => {
  return (
    
    <div>
    <Navbar/>
    <div className="about" id="about">
    
      <h1 className="event-header">
        Events
      </h1>
      <br />
      <div className='event-grid'>
        <div className='event-list-l'>
          <ul>
          <Link href="/events/codeboard">
            <li className='event-item'>
            
              <div className='event-heading'>Code & Board</div>
              <div className='event-desc'>Hackathon in which problem statements are related to the theme.</div>
            
            </li>
          </Link>

          <Link href="/events/Ideathon">
            <li className='event-item'>
              <div className='event-heading'>Ideathon</div>
              <div className='event-desc'>Participants may propose any development ideas in the technical field.</div>
            </li>
          </Link>

          <Link href="/events/BOG">
            <li className='event-item'>
              <div className='event-heading'>Best out of GOODS</div>
              <div className='event-desc'>Participants will have to prepare circuits with the provided electronic components.</div>
            </li>
          </Link>

          <Link href="/events/Android">
            <li className='event-item'>
              <div className='event-heading'>Android Artists</div>
              <div className='event-desc'>Debug the given code to make the final app.</div>
            </li>
          </Link>

          <Link href="/events/Weavingweb">
            <li className='event-item'>
              <div className='event-heading'>Weaving the Web</div>
              <div className='event-desc'>Weaving the Web.</div>
            </li>
          </Link>

          <Link href="/events/Drivebot">
            <li className='event-item'>
              <div className='event-heading'>Drive the Bot</div>
              <div className='event-desc'>Assemble given bot and drive it through the course.</div>
            </li>
          </Link>

          <Link href="/events/Circuitmania">
            <li className='event-item'>
              <div className='event-heading'>Circuit-o-Mania</div>
              <div className='event-desc'>Rectify the given circuit.</div>
            </li>
          </Link>

          <Link href="/events/DSvisualization">
            <li className='event-item'>
              <div className='event-heading'>Data Science Visualization</div>
              <div className='event-desc'>Visualize the given data set using various data-vis tools.</div>
            </li>
          </Link>

          <Link href="/events/Lathe">
            <li className='event-item'>
              <div className='event-heading'>Lathe wars</div>
              <div className='event-desc'>Make the final product with the help of materials provided in the workshop.</div>
            </li>
          </Link>

          <Link href="/events/model">
            <li className='event-item'>
              <div className='event-heading'>3D model design</div>
              <div className='event-desc'>Designing a model on AutoCAD to 3D print it.</div>
            </li>
          </Link>

          <Link href="/events/Lasercutting">
            <li className='event-item'>
              <div className='event-heading'>Laser Cutting</div>
              <div className='event-desc'>Laser cutting the material after making a 2D design and assembling it.</div>
            </li>
          </Link>

          <Link href="/events/aimodel">
            <li className='event-item'>
              <div className='event-heading'>Al Model</div>
              <div className='event-desc'>Present a prototype/project implementing the use of Artificial Intelligence.</div>
            </li>
          </Link>
          </ul>
        </div>
        
        <div className='event-list-r'>
          <ul>
          <Link href="/events/Carparts">
            <li className='event-item'>
              <div className='event-heading'>Car parts assembly</div>
              <div className='event-desc'>Car parts assembly.</div>
            </li>
          </Link>

          <Link href="/events/Lasertag">
            <li className='event-item'>
              <div className='event-heading'>Laser tag</div>
              <div className='event-desc'>Recreational shooting sport where participants use infrared-emitting lasers to tag designated targets.</div>
            </li>
          </Link>

          <Link href="/events/constructo">
            <li className='event-item'>
              <div className='event-heading'>Model testing: Constructo</div>
              <div className='event-desc'>On-spot model making consists of a bridge framed structures using balsa sticks and ice cream sticks.</div>
            </li>
          </Link>

          <Link href="/events/Resilience">
            <li className='event-item'>
              <div className='event-heading'>Model testing: Resilience</div>
              <div className='event-desc'>Get your measurements right with precision and accuracy and build the tallest building to withstand the two most powerful forces of nature- wind and earthquake load.</div>
            </li>
          </Link>

          <Link href="/events/Paintgalaxy">
            <li className='event-item'>
              <div className='event-heading'>Paint your Galaxy</div>
              <div className='event-desc'>Make a poster be it digital or handmade on the theme cosmos.</div>
            </li>
          </Link>

          <Link href="/events/Cosmos">
            <li className='event-item'>
              <div className='event-heading'>Hunting through the Cosmos</div>
              <div className='event-desc'>A treasure event with questions based on space.</div>
            </li>
          </Link>

          <Link>
            <li className='event-item'>
              <div className='event-heading'>Think Out-Of-The-Space</div>
              <div className='event-desc'>Quiz competition based on the mentioned theme.</div>
            </li>
          </Link>

          <Link href="/events/Levelup">
            <li className='event-item'>
              <div className='event-heading'>Finish and Level Up</div>
              <div className='event-desc'>Complete the task on each floor in the given time period and move ahead.</div>
            </li>
          </Link>

          <Link href="/events/mun">
            <li className='event-item'>
              <div className='event-heading'>Tech MUN</div>
              <div className='event-desc'>People would be assigned Corporate Companies instead of Countries.</div>
            </li>
          </Link>

          <Link href="/events/floatarig">
            <li className='event-item'>
              <div className='event-heading'>FloataRIG</div>
              <div className='event-desc'>A competition to design a floating platform for deep sea wind farms that must withstand turbulent current, high speed winds and changing tides while efficiently generating power</div>
            </li>
          </Link>

          <Link href="/events/Project">
            <li className='event-item'>
              <div className='event-heading'>Project Competition</div>
              <div className='event-desc'>Participants will be exhitibit their proiects in a competition based event</div>
            </li>
          </Link>
          </ul>          
        </div> 

        {/* **BUTTON** */}
        
          

      </div> 
      
      
        
    </div>
     
    </div>
  )
}

export default Event