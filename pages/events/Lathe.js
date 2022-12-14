import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import { Button , Spacer , Fade ,  Link , Grid} from "@nextui-org/react";
import { Container } from "@mui/material"
// import './events.css'
import Image from "next/image";
import Poster from "../../public/posters/Lathe.png";



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
                <title>Lathe Wars</title>
            
            </Head>
            
            <div className="about" id="about">
            {/* <h1 className="about-header">Lathe Wars</h1> */}
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}
                                A Lathe Machine will be assigned to individual participants. Each participant would be provided with designs of two components on spot. If the tool is not available then time will be paused.
                                <br/><br/><b>Tools provided:</b> Knurling tool, Grooving Tool, Single Point Cutting tool

<br/></p>  
<h1 className="about-main-text">Event Rules</h1>
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
  

<p className="about-subtext">
1. Once a Design is selected it cannot be undone<br/>
2. Required tools will be provided on the spot.<br/>
3. Appropriate footwear is mandatory and safety protocols to be followed. No slippers or flip-flops allowed.
<br/><br/>
<b>Team Size:</b> Individual<br/><br/>
<b>Judging Criteria: </b>
The participant who has the most accurate, fine component with respect to the design selected and the time required to make the job will be selected as the winner.


</p>
                            
                            <p className="about-subtext"></p>
                            <Spacer y={1} />
                            <Button  className="about-btn" size="xlarge" shadow color="gradient" auto>
                            <Link href = "/register">Register Now</Link>
                            </Button>
                        

                    </Grid>
                    <Grid xs={12} md={6} justify = "center" className="about-img-col">
                       
                            <Image className="about-img" src={Poster} height ="900px" bottom="400px"/>
                        
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
        </div>
    )
}