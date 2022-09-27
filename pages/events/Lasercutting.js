
import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import { Button , Spacer , Fade ,  Link , Grid} from "@nextui-org/react";
import { Container } from "@mui/material"
// import './events.css'
import Poster from "../../public/laser cutting.png";
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
                <title>Laser Cutting</title>
            
            </Head>
            
            <div className="about" id="about">
            {/* <h1 className="about-header">Laser Cutting</h1> */}
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}

                                Each team will be given two hours to come up with an original and unique design within the designated dimensions, with complete creative control. Out of all the designs, top 5 selected and processed for laser cutting, the next day. MDF sheets of 8x4 feet will be provided for laser cutting.
<br/></p> 
<h1 className="about-main-text">Event Rules</h1>
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
   

<br/>
<p className="about-subtext">
1. Choosing references appropriate to the overall theme. <br/>
2. Originality and creativity will be major criteria for selection.<br/>
3. Structural integrity of design.<br/>
4. Complexity of AutoCAD design.<br/>
<br/>
<b>Team Size:</b> Group of 4

</p>
                            
                            <p className="about-subtext"></p>
                            <Spacer y={1} />
                            <Button  className="about-btn" size="xlarge" shadow color="gradient" auto>
                            <Link href = "/register">Register Now</Link>
                            </Button>
                        

                    </Grid>
                    <Grid xs={12} md={6} justify = "center" className="about-img-col">
                        {/* <Fade bottom duration={2000}> */}
                            <Image className="about-img" src={Poster} bottom="400px"/>
                        {/* </Fade> */}
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
        </div>
    )
}