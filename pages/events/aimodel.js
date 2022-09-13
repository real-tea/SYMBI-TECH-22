import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import { Button , Spacer , Fade ,  Link , Grid} from "@nextui-org/react";
import { Container } from "@mui/material"
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
                <title>AI-Model</title>
            
            </Head>
            
            <div className="about" id="about">
            <h1 className="about-header">AI-Model</h1>
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}
                                Every participant is supposed to make a project/prototype demonstrating the use of artificial intelligence.
                                Participants can pick the language & framework of their choice.
                                It must fall in the category of either of the problem statements. 
                                The project should be operational at the time of demo, it will be judged based on its implementation at the time of demo

                            .<br/>
<h1 className="about-main-text">Event Rules</h1>
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
</p>    

<br/>
<p className="about-subtext">
1. Can be played in 2 modes(time based:30 min and team based).<br/>
2. Max 3 attempts per clue.<br/>
3. Teams have to debug and reach to clues before time runs out or another team reaches the end point.

</p>
                            
                            <p className="about-subtext"></p>
                            <Spacer y={1} />
                            <Button  className="about-btn" size="xlarge" shadow color="gradient" auto>
                            <Link href = "/register">Register Now</Link>
                            </Button>
                        

                    </Grid>
                    {/* <Grid xs={12} md={6} justify = "center" className="about-img-col">
                        <Fade bottom duration={2000}>
                            <Image className="about-img" src={Collage} bottom="400px"/>
                        </Fade>
                    </Grid> */}
                </Grid.Container>
            </Container>
        </div>
        </div>
    )
}