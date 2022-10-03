import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import { Button , Spacer , Fade ,  Link , Grid} from "@nextui-org/react";
import { Container } from "@mui/material"
// import './events.css'
import Image from "next/image"
import Poster from "../../public/posters/levelup.png"





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
            {/* <h1 className="about-header">Level Up</h1> */}
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}
                                The teams will have to finish the tasks subsequently on each floor in the least amount of time possible and level up to the next floor.



<h2 className="about-main-text">Event Rules</h2>
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
</p>    
<br/>
<p className="about-subtext">
1. A volunteer will be assigned to each team who will keep a track of the time taken by them and will assist them if they face any problems. <br/>
2. The team will start from the ground floor after registering.<br/>
3. Each floor will have one room with the name of a planet or star written on the door. Teams will have to search for such a room on each floor and perform the given task in the room.<br/>
4. It is mandatory to solve the tasks given on each floor correctly. Failing to do so will result in disqualification of the team. <br/>
5. Use of elevators by any participant from the team will lead to disqualification of the entire team. <br/>
<br/>
<b>Team Size: </b> Group of 4

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