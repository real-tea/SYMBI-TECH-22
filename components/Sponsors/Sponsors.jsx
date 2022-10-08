import { Container, useMediaQuery } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import Fade from 'react-reveal/Fade';
import S1 from "../../public/sponsor/bfin.jpg";
import S2 from "../../public/sponsor/byte.jpg";
import S3 from "../../public/sponsor/CL.jpeg";
import S4 from "../../public/sponsor/ieee.png";
import S5 from "../../public/sponsor/len.jpg";

import { Row, Col, Grid, Button, Spacer, Link } from '@nextui-org/react';

// import { SiJavascript } from 'react-icons/si'

// import rlogowhite from '../../public/images/react-logo-white.png'
// import nextlogo from '../../public/images/next-logo.png'
import Collage from '../../public/images/collage_about.png';

export default function About() {


    return (
        <div className="about" id="about">
            <h1 className="about-header">Sponsors</h1>
            <Container className="projects-container">
                <Fade bottom duration={1000}>
                    <Grid.Container gap={2} justify="center">
                        <Grid md={4}>
                            
                                <div className="proj-box">
                                    
                                        <Image priority className="proj-img" src={S1} />
                                    {/* {"DS Visualization"} */}
                                </div>
                        </Grid>
                        <Grid md={4}>
                                <div className="proj-box">
                                        <Image priority className="proj-img" src={S2} />
                                    {/* {"Constructo"} */}
                                </div>
                        </Grid>

                        <Grid md={4}>
                                <div className="proj-box">
                                        <Image priority className="proj-img" src={S3} />
                                    {/* {"Laser Cutting"} */}
                                </div>
                        </Grid>

                        <Grid md={4}>
                            <Link href="/register" target="__blank">
                                <div className="proj-box">
                                    <Link href="/register">
                                        <Image priority className="proj-img" src={S4} />
                                    </Link>
                                    {/* {"Laser Cutting"} */}
                                </div>
                            </Link>
                        </Grid>

                        <Grid md={4}>
                            <Link href="/register" target="__blank">
                                <div className="proj-box">
                                    <Link href="/register">
                                        <Image priority className="proj-img" src={S5} />
                                    </Link>
                                    {/* {"Laser Cutting"} */}
                                </div>
                            </Link>
                        </Grid>


                        {/* <Grid md={4}>
                            <div className="proj-box">

                                <Button className="about-btn" size="xlarge" shadow color="gradient" auto>
                                    <Link href="/events">and more...</Link>
                                </Button>

                            </div>
                        </Grid> */}
                    </Grid.Container>
                </Fade>
            </Container>
        </div>
    )
}
