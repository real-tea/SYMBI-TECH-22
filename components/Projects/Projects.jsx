import React from 'react'

import { Row, Col, Grid, Button, Spacer } from '@nextui-org/react';
import Image from 'next/image'
import Link from "next/link";
import { Container } from '@mui/material'

import Fade from 'react-reveal/Fade';

import newsdux from "../../public/images/newsdux.png"
import mauka from "../../public/images/mauka.png"
import firepost from "../../public/images/firepost.png"


export default function Projects() {
    return (
        <div className="projects" id="work">
            <h1 className="projects-header">Events</h1>

            <Container className="projects-container">
                <Fade bottom duration={2000}>
                    <Grid.Container gap={2} justify="center">
                        <Grid md={4}>
                            <Link href="/register" target="__blank">
                                <div className="proj-box">
                                    <Link href="/register">
                                    <Image priority className="proj-img" src={mauka} />
                                    </Link>
                                    {"Ideathon"}
                                </div>
                            </Link>
                        </Grid>
                        <Grid md={4}>
                            <Link href="/register" target="__blank">
                                <div className="proj-box">
                                    <Link href="/register">
                                    <Image priority className="proj-img" src={firepost} />
                                    </Link>
                                    {"Code"}
                                </div>
                            </Link>
                        </Grid>
                        
                        <Grid md={4}>
                            <Link href="/register" target="__blank">
                                <div className="proj-box">
                                    <Link href="/register">
                                    <Image priority className="proj-img" src={newsdux} />
                                    </Link>
                                    {"Lazer Tag"}
                                </div>
                            </Link>
                        </Grid>

                        
                        <Grid md={4}>
                            <div className="proj-box">

                                <Button className="about-btn" size="xlarge" shadow color="gradient" auto>
                                    <Link href="/events">and more...</Link>
                                </Button>

                            </div>
                        </Grid>
                    </Grid.Container>
                </Fade>
            </Container>
        </div>
    )
}
