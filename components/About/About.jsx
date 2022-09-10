import { Container, useMediaQuery } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import Fade from 'react-reveal/Fade';

import { Row, Col, Grid, Button, Spacer , Link } from '@nextui-org/react';

// import { SiJavascript } from 'react-icons/si'

// import rlogowhite from '../../public/images/react-logo-white.png'
// import nextlogo from '../../public/images/next-logo.png'
import Collage from '../../public/images/collage_about.png';

export default function About() {

    
    return (
        <div className="about" id="about">
            <h1 className="about-header">About</h1>
            <Container className="abt-cont">
                <Grid.Container gap={2} justify="center" className="about-content">
                    <Grid xs={12} md={6} className="flex flex-col abt-text-section">
                        <Fade bottom duration={2000}>
                            <p className="about-main-text">All Work, All Play</p>
                            {/* <p className="about-subtext">I&apos;m a Computer Science Undergraduate and a Frontend Developer from India 🇮🇳 Student at heart, and a Developer by profession, I make frontends look good with JavaScript and a sprinkle of CSS ✨ </p> */}
                            <p className = "about-subtext">
                                <span shadow color = "gradient" className="gradient-text">Symbiosis Institute of technology </span>
                            brings back its very own and well-renowned technical fest with added zest ✨ <br/> and enthusiasm this year. 
For the first time, it is planned to be a centralized national-level event 🚀.<br/>
 {/* Everyone regardless of their branch will come together to showcase the perfect two days.  */}

<span shadow color = "gradient" className="gradient-text">SymbITech</span> will help young minds, broaden their vision, and surrender to their instincts for knowledge
</p>    <br/>
<p className="about-subtext">SymbITech, the Annual Technical Fest of SIT is all set to blow up everyone’s mind with lots off challenging events and knowledge hunts. 🤯</p>
                            <p className="about-subtext"></p>
                            <Spacer y={1} />
                            <Button  className="about-btn" size="xlarge" shadow color="gradient" auto>
                            <Link href = "/about">Know More</Link>
                            </Button>
                        </Fade>

                    </Grid>
                    <Grid xs={12} md={6} justify = "center" className="about-img-col">
                        <Fade bottom duration={2000}>
                            <Image className="about-img" src={Collage} bottom="400px"/>
                        </Fade>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}
