import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import { Button , Spacer , Fade ,  Link , Grid} from "@nextui-org/react";
import { Container } from "@mui/material"
import Image from 'next/image';
import Poster from "../../public/posters/android.png"
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
                {<title>Android Artists</title>}
            
            </Head>
            
            <div className="about" id="about">
            {/* <h1 className="about-header">Android Artists</h1> */}
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                    {/* <h1 className="about-main-text">Description</h1> */}
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}
                                There will be 2 levels both set to be done in an allotted time frame<br/></p>    
{/* <h1 className="about-main-text">Event Rules</h1> */}
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}

<h2 className="about-main-text">Event Rules</h2>
<br/>
<p className="about-subtext">
<b>Level 1 : Debug (15mins)</b><br/>
1. Debug the code. <br/>
2. Find what the error is. <br/>
3. Use the error to figure out what the ‘passcode’ is to get to the next level.<br/>
<br/>
<b>Level 2 : Treasure Hunt (30 mins)</b><br/>
1. Use the error from the previous level to find what the passcode could be to enter level 2.<br/>
2. A UI will be displayed once you log in with the correct passcode which will lead to the display of 4 chests. <br/>
3. Choose a Chest and you’ll be allotted a quest within that chest in the app. <br/>
4. The first person to solve the quest within the time frame wins the prize. <br/><br/>
Theme: Pirates of the Caribbean<br/>
Each team must have:  Group of 3 members<br/>

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