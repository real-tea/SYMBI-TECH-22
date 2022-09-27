import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import { Button , Spacer , Fade ,  Link , Grid} from "@nextui-org/react";
import { Container } from "@mui/material"
import Poster from "../../public/posters/carparts.png"
import Image from 'next/image';
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
                <title>Car Parts Assembly</title>
            
            </Head>
            
            <div className="about" id="about">
            {/* <h1 className="about-header">Car Parts Assembly</h1> */}
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}

                                An opportunity to tinker, learn and have fun in this event where your team will be given vehicle parts like Carburettor, spark plugs etc, which you have to assemble and learn.
.<br/></p>   
<h2 className="about-main-text">Event Rules</h2>
{/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
<p className="about-subtext">
This event will be on two levels: <br/>
Level 1: Teams will have to identify car parts and state their purpose in brief. <br/>
Level 2: The given parts will have to be assembled correctly in the least amount of time. <br/>
Required tools will be provided. <br/><br/>
<b>Team Size:</b> Group of 4 <br/><br/>
<b>Judging Criteria:</b> The team which assembles the given parts accurately and finishes the given task in the least amount of time will be declared as the winning team.<br/>


</p>
                            
                            <p className="about-subtext"></p>
                            <Spacer y={1} />
                            <Button  className="about-btn" size="xlarge" shadow color="gradient" auto>
                            <Link href = "/register">Register Now</Link>
                            </Button>
                        

                    </Grid>
                    <Grid xs={12} md={6} justify = "center" className="about-img-col">
                        
                            <Image className="about-img" src={Poster}/>
                       
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
        </div>
    )
}