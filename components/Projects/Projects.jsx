import React from 'react'

import { Row, Col, Grid, Button, Spacer } from '@nextui-org/react';
import Image from 'next/image'
import Link from "next/link";
import { Container } from '@mui/material'

import Fade from 'react-reveal/Fade';

import newsdux from "../../public/images/newsdux.png"
import mauka from "../../public/images/mauka.png"
import firepost from "../../public/images/firepost.png"
import instaclone from "../../public/images/instaclone.png"
import firechat from "../../public/images/firechat.png"
import discordbot from "../../public/images/discordbot.png"
import daedarus from "../../public/images/daedarus.png"
import hackclub from "../../public/images/hackclub.png"

export default function Projects() {
    return (
        <div className="projects" id="work">
            <h1 className="projects-header">Events</h1>

            <Container className="projects-container">
                <Fade bottom duration={2000}>
                    <Grid.Container gap={2} justify="center">
                        <Grid md={4}>
                            <a href="" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={mauka} />
                                    {"Treasure Hunt"}
                                </div>
                            </a>
                        </Grid>
                        <Grid md={4}>
                            <a href="" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={firepost} />
                                    {"Hackathon"}
                                </div>
                            </a>
                        </Grid>
                        {/* <Grid md={4}>
                            <a href="" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={instaclone} />
                                    {"Bot Wars"}
                                </div>
                            </a>
                        </Grid>

                        <Grid md={4}>
                            <a href="" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={firechat} />
                                    {"Space Hunt"}
                                </div>
                            </a>
                        </Grid> */}
                        {/* <Grid md={4}>
                            <a href="" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={discordbot} />
                                    {"FIFA 2022"}
                                </div>
                            </a>
                        </Grid> */}
                        <Grid md={4}>
                            <a href="" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={newsdux} />
                                    {"Lazer Tag"}
                                </div>
                            </a>
                        </Grid>

                        {/* <Grid md={4}>
                            <a href="" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={daedarus} />
                                </div>
                            </a>
                        </Grid>
                        <Grid md={4}>
                            <a href="" target="__blank">
                                <div className="proj-box">
                                    <Image priority className="proj-img" src={hackclub} />
                                </div>
                            </a>
                        </Grid> */}
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
