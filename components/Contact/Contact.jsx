import React from 'react'
import Image from 'next/image'
import { Input, Button, Row, Col, Grid, Spacer, Textarea, Tooltip } from '@nextui-org/react';
import contact_us from '../../public/images/contact_us.svg'
import Fade from 'react-reveal/Fade';
import { Container } from '@mui/material'


export default function Contact() {
    return (
        <div className="contact" id="contact">
            <h1 className="contact-header">Contact</h1>
            <Container className="contact-container">
                <h1 className="contact-text">Hit us Up</h1>
                <Grid.Container gap={2} justify="center">
                    <Grid md={6}>
                        <Fade bottom duration={2000}>
                            <Image className="about-img" src={contact_us} width="2000px" height="2000px" />
                        </Fade>
                    </Grid>
                    <Grid md={6} className="flex flex-col">
                        <Fade bottom duration={2000}>
                            <form
                                action="https://formspree.io/f/xaykqjqe"
                                method="POST"
                            >
                                <Spacer y={3} />
                                <Input color="secondary" fullWidth underlined invert className="cont-input" size="xlarge" labelPlaceholder="Name" name="name" />
                                <Spacer y={3} />
                                <Input color="secondary" fullWidth underlined invert className="cont-input" size="xlarge" labelPlaceholder="Email" name="_replyto" />
                                <Spacer y={3} />
                                {/* <Input color="secondary" underlined invert className="cont-input" size="xlarge" labelPlaceholder="Message" /> */}
                                <Textarea
                                    underlined
                                    color="secondary"
                                    labelPlaceholder="Message"
                                    size="xlarge"
                                    fullWidth="true"
                                    name="message"
                                />
                                <Spacer y={3} />

                                <Button className="contact-btn" size="xlarge" shadow color="gradient" auto type="submit">Send</Button>
                            </form>
                        </Fade>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}
