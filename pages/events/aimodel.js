import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image"
import Poster from "../../public/posters/aimodel.png";
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
                <title>AI Model</title>
            
            </Head>
            
            <div className="about" id="about">
            {/* <h1 className="about-header">AI-Model</h1> */}
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                    {/* <h1 className="about-main-text">Description</h1> */}
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}
                                Creating a project that implements AI. The sub-domain can be from any field (healthcare, finance, military, etc.). The project should be created & operational at the time of competition to the panellists. Submission of the project should be done in a Jupyter Notebook file (.ipynb).
                            </p> 
                            .<br/>
<h2 className="about-main-text">Event Rules</h2>
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
   

<br/>
<p className="about-subtext">
1. The code used in the project should not be plagiarized. Any existing project should not be modified end to end. Only a part for reference can be used.<br/>
2. References to any other projects/documentation should be clearly mentioned.<br/>
3. Any framework/module of your choice can be used.<br/>
4. Free APIs are allowed as long as due references are mentioned and no licenses are violated.<br/>
<br/>
<b>Judging Criteria</b><br/>
Judging will be based on the implementation, innovation, creativity and efficiency of the project by an industry expert.<br/>
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