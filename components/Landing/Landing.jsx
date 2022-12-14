import { Container, Grid } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import Fade from 'react-reveal/Fade';


export default function Landing() {

    return (
        <div className="landing" id="home">
            <Container>
                <Fade duration={2500} delay={500} big>
                    {/* <h3 className="landing-h3">Hello, I&apos;m </h3> */}
                    <h3 className="landing-h3">Welcome to </h3>
                </Fade>
                <Fade duration={2500} delay={1500}>
                    <h1 className='bajaj'>Bajaj Finserv’s</h1>
                    <h1 className="gradient-text landing-h1" shadow color="gradient">SymbITech&apos;22</h1>
                </Fade>

                <Fade duration={2500} delay={2500}>
                    <h1 className="landing-h3">11th-12th October</h1>
                </Fade>
            </Container>
        </div>
    )
}
