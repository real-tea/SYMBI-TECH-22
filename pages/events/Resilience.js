import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import { Button , Spacer , Fade ,  Link , Grid} from "@nextui-org/react";
import { Container } from "@mui/material"
// import './events.css'
import Poster from "../../public/posters/resilience.png";
import Image from "next/image";



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
                <title>Resilience</title>
            
            </Head>
            
            <div className="about" id="about">
            {/* <h1 className="about-header">Resilience</h1> */}
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}
                                In this technical event, we have an innovative theme for all the engineers. The event of on-spot model making consists of G+8 framed structures using balsa sticks of 4mm x 3mm x 1000mm in length.

.<br/></p>
<h1 className="about-main-text">Event Rules</h1>
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
    

<br/>
<p className="about-subtext">
1. Vertical joints and horizontal joints allowed.<br/>
2. Central bracings (internal bracings) are not allowed.<br/>
3. Single diagonal bracings are only allowed only on the side faces.<br/>
4. The sheet pasted on the structure should be uniform, edge to edge and properly pasted. <br/>
5. Paper pins should be placed by the team members only on each floor on two of the opposite sides for the weights to be added.<br/>
6. A cardboard of dimensions 30cm*30cm will be provided which has to be used as the base for the structure.<br/>
7. Columns are only allowed to be placed at a minimum clear spacing of 5 cm with any neighboring column.<br/>
8. No additional/ extra material will be provided under any circumstances.<br/>
9. Each team will get a total time of 150 mins. No additional time will be provided under any circumstances.<br/>
<br/>
<b>Materials provided:</b> Balsa Sticks, Glue, Ivory Sheets, Cardboard Base, Stationary


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