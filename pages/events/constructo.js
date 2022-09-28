import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import { Button , Spacer , Fade ,  Link , Grid} from "@nextui-org/react";
import { Container } from "@mui/material"
import Image from 'next/image';

import Poster from "../../public/constructo.png"
// import './events.css'




const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

export default function Events() {
    return (
        <div className="body">
            <AnimatedCursor
                innerSize={15}
                outerSize={40}
                color='255, 255, 255'
                outerAlpha={0.2}
                innerScale={0.6}
                outerScale={2}
                trailingSpeed={3}
            />
            <Head>
                <title>Constructo</title>
            
            </Head>
            
            <div className="about" id="about">
            {/* <h1 className="about-header">Constructo</h1> */}
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}
                                For this event, teams will have an innovative theme.This model making competition will consist of building bridge framed structures using balsa sticks which can withstand a pressured flow of water and also there are some restrictions in construction of bridges which have to be maintained.
<br/>
</p>    
<h1 className="about-main-text">Event Rules</h1>
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}


<br/>
<p className="about-subtext">
<b>Materials provided to each team:</b><br/>Balsa sticks, Feviquick, Cardboard sheet, Corrugated plastic sheet, Cutter, Scale (30cm), Pencil
<br/><br/>
<b>Structural Details:</b><br/>
Deck length of the bridge = 44cm-46cm<br/>
Area of the deck = 460 cmsq<br/>
Height of the pier = 15 cm.<br/>
Center to center distance of the pier = 32 cm<br/>
Deck clearance = 3cm for both ends to the pier<br/>
Railing height = 5cm<br/>
<b>​Pier shapes: </b>Triangle, ​Square, Rectangle, ​Pentagon, ​Hexagon<br/>
Vertical and horizontal bracings are not allowed<br/>
Railing height should not be less than 5 cm<br/>
The pillar must be placed within the boundary provided.<br/><br/>
A total of 6 Pins must be placed at a minimum distance of 5cm and apart so as to fix weights.<br/>
The railings, deck (road) and pillars from all sides must be covered with the provided corrugated sheet. 
The longest side of the pillar must be constructed so that it will be placed perpendicular to the direction of water flow 
Cardboard sheets with holes drilled
<br/><br/>
<b>Railings:</b><br/>
In real life scenarios for the safety purpose of the pedestrians walking on the sides of the bridges railings must be provided. So considering this case railings must be
provided on both the sides of the bridge.
No gaps must be present in between the foam sheets.
No extensions must be done away from the structure


<br/>
<b>Team Size: </b> Group of 4



{/* 1. Can be played in 2 modes(time based:30 min and team based).<br/> */}
{/* 2. Max 3 attempts per clue.<br/> */}
{/* 3. Teams have to debug and reach to clues before time runs out or another team reaches the end point. */}

</p>
                            
                            <p className="about-subtext"></p>
                            <Spacer y={1} />
                            <Button  className="about-btn" size="xlarge" shadow color="gradient" auto>
                            <Link href = "/register">Register Now</Link>
                            </Button>
                        

                    </Grid>
                    <Grid xs={12} md={6} justify = "center" className="about-img-col">
                        
                            <Image className="about-img" src={Poster} bottom="400px"/>
                        
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
        </div>
    )
}