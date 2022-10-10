import dynamic from "next/dynamic";
import Head from "next/head";
import About_us from "../../components/About_us/About_us";
import { Button, Spacer, Fade, Link, Grid } from "@nextui-org/react";
import { Container } from "@mui/material"
// import './events.css'
import Poster from "../../public/posters/oscillopattern.png";
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
                <title>OSCILLOPATTERN</title>

            </Head>

            <div className="about" id="about">
                <h1 className="about-header">OSCILLOPATTERN</h1>
                <Container className="abt-cont">
                    <Grid.Container gap={2} justify="center" className="about-content">
                        <Grid xs={12} md={6} className="flex flex-col abt-text-section">

                            {/* <p className="about-main-text">All Work, All Play</p> */}
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className="about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}


                                <br />The objective of the event is to use your knowledge about utilising a DSO (Digital Oscilloscope) and a couple of Frequency generators to design patterns as instructed by the hosts on the display of the DSO.</p>
                            <h1 className="about-main-text">Event Rules</h1>
                            ● No ready or semi-finished model or matter would be accepted by teams in the competition.<br />
                            ● Teams will be judged on creativity, utilization of the frequency generators to design patterns, and application of the device.<br />
                            ● Teams may choose from any available materials given at their disposal.<br />
                            Team Size: Group of 2
                            {/* <span shadow color = "gradient" className="gradient-text">SymbITech</span> 
                            will help young minds, broaden their vision, and surrender to their instincts for knowledge */}
                            <p className="about-subtext">
                                {/* <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span> */}

                                {/* A Poster making competition to see how creative and communicative our students are through a piece of paper. */}

                                <br /></p>

                            <br />
                            <p className="about-subtext">
                                {/* 1. For online participants i.e digital poster entries deadline will be the day of the offline event.<br /> */}
                                {/* 2. For offline participants, 2-3 hours time will be allotted to complete their posters in the room itself.<br /> */}
                                {/* 3. Teams have to debug and reach to clues before time runs out or another team reaches the end point. */}

                            </p>

                            <p className="about-subtext"></p>
                            <Spacer y={1} />
                            <Button className="about-btn" size="xlarge" shadow color="gradient" auto>
                                <Link href="/register">Register Now</Link>
                            </Button>


                        </Grid>
                        <Grid xs={12} md={6} justify="center" className="about-img-col">

                            <Image className="about-img" src={Poster} bottom="400px" />

                        </Grid>
                    </Grid.Container>
                </Container>
            </div>
        </div>
    )
}