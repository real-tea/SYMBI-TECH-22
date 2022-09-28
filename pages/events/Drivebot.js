import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import { Button , Spacer , Fade ,  Link , Grid} from "@nextui-org/react";
import { Container } from "@mui/material"
// import './events.css'
import Image from "next/image"
import Poster from "../../public/posters/bot.png"



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
                <title>Drive the Bot</title>
            
            </Head>
            
            <div className="about" id="about">
            {/* <h1 className="about-header">Drive the Bot</h1>   */}
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}
                                The objective of this contest is for teams to bring a pre-built Remote Controlled Robot to complete the maze track built with obstacles. Fastest bot to complete the course while accurately tracking the course line wins.<br/></p>  
<h2 className="about-main-text">Event Rules</h2>
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
  

<br/>
<p className="about-subtext">
<b>Robots per event:</b> 1<br/><br/>
<b>Robot specifications:</b> 2 ft. X 2 ft. (maximum)<br/>
<b>Max. weight of robot:</b> 3kg (Except batteries)<br/>
<b>Arena Length:</b> 30 meters long<br/><br/>
Time is measured from the second the robot crosses the starting line until the time it reaches the finish line.<br/> It is deemed to have crossed the line when the forward most wheel, track, or leg of the robot contacts or crosses over the line.<br/>
If the Robot crosses a checkpoint, and moves off track, then the Robot would be placed back on the previous checkpoint crossed. (Obstacles will be ramps, barricades etc.)<br/>
During the gameplay, if any part of a robot is destructed/ dismantled/ damaged the team will be given a timeout to repair at an expense of a penalty, while the next team will be called for play.<br/>
<br/>Only 1 timeout will be allowed per team.<br/>

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