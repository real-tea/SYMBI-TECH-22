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
                <title>Circuit-O-Mania</title>
            
            </Head>
            
            <div className="about" id="about">
            <h1 className="about-header">Circuit-O-Mania</h1>
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        
                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}
                                We create five basic circuits of “Type A, B, C, D, E”. These 5 include online as well hardware based circuits; each “Type” of a circuit has further subdivisions 1, 2 and 3 then we give the player choice of choosing a circuit from A to E and randomly allot the subdivision 1/2/3. Player solves the circuit in a stipulated amount of time. The player who solves the fastest in a category will be the winner.
<br/>
<h1 className="about-main-text">Event Rules</h1>
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

{/* <span shadow color = "gradient" className="gradient-text">SymbITech</span>  */}
{/* will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
</p>    

<br/>
<p className="about-subtext">
1. Stop timers shall be strictly followed.<br/>
2. A player can choose only 1 circuit per day.<br/>
3. Any sort of help from peers/internet shall lead to disqualification.

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