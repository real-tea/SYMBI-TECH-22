import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import { Button , Spacer , Fade ,  Link , Grid} from "@nextui-org/react";
import { Container } from "@mui/material"
import Image from 'next/image';
import Poster from "../../public/posters/bog.png"
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
                <title>Best out of Goods</title>    
            
            </Head>
            
            <div className="about" id="about">
            {/* <h1 className="about-header">Battle of Gods</h1> */}
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                    
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}
                                The main objective of this competition is to encourage students to design and build an engineering model by applying their knowledge and creativity. Teams may choose from certain hardware products such as motors, Arduino, sensors and circuits to showcase their talent and technical skills.

    <br/></p>
<h2 className="about-main-text">Event Rules</h2>
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
  

<br/>
<p className="about-subtext">
1. No ready or semi-finished model or matter would be accepted by teams in the competition.<br/>
2. Teams will be judged on creativity, utilization of resources, & design.<br/>
3. Teams may choose from any available materials given at their disposal.<br/>
<br/>

<b>Judging Criteria</b><br/>
<b>Stage 1- Design:</b><br/>
Teams will be evaluated on the basis of their model’s overall design and presentation/appearance. <br/>
<b>Stage 2- Rationalization:</b><br/>
Teams should justify their usage of materials and the overall idea of their model.<br/>
<b>Stage 3- Society Application:</b><br/>
The teams should have a thoughtful objective behind the idea of their project describing its application.<br/>



</p>
                            
                            <p className="about-subtext"></p>
                            <Spacer y={1} />
                            <Button  className="about-btn" size="xlarge" shadow color="gradient" auto>
                            <Link href = "/register">Register Now</Link>
                            </Button>
                        

                    </Grid>
                    <Grid xs={12} md={6} justify = "center" className="about-img-col">
                        
                            <Image className="about-img" src={Poster} height="900px" bottom="400px"/>
                        
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
        </div>
    )
}