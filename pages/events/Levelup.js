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
                <title>Finish & Level Up</title>
            
            </Head>
            
            <div className="about" id="about">
            <h1 className="about-header">Level Up</h1>
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}
                                Each floor will be named after some planet/star. The event will start from the ground floor. Each team will have to finish the task of the particular department in a given time and move to the next floor. Ground floor will have tasks related to the civil department, the first floor will have tasks related to the mechanical department, the third floor will have tasks related to the ENTC department and the fourth floor will have tasks related to the CS/IT/AIML/RNA department. The fifth floor will be the last floor and will have tasks which will incorporate some aspects of each department. The second floor is a blackhole.

.<br/>
<h1 className="about-main-text">Event Rules</h1>
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
</p>    

<br/>
<p className="about-subtext">
1. There will be 2 rounds. The 2nd round will consist of all the teams that made it to the top level in the 1st round.<br/>
2. The participants will register individually. We will form a team of 4 members with 1 member from each department.<br/>
3. Any random team may get caught into the blackhole.<br/>
4. Irrespective of the level that the team is on, if the team gets caught in a blackhole, they will have to solve the extra task and move ahead starting from the level they were on previously. <br/>
5. Use of lifts by any participant from the team will lead to disqualification of the entire team

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